//SERVIDOR WEB PRINCIPAL
import express from 'express';
// import pool from '../config/db'; conexion Local
import colors from 'colors';
//import supabase from './config/supabase'; //Conexion Global
import sequelize from './config/sequelize';

const app = express();
app.use(express.json());
// Ruta para obtener datos de tb_persona

//conxion sequelize
sequelize.authenticate()
  .then(async () => {
    console.log(colors.green('✅ Conexión a supabase (Sequelize) establecida'));
    // Puedes sincronizar modelos si lo deseas
    await sequelize.sync(); // Crea tablas si no existen (usa { force: true } solo si quieres recrear todo desde cero)
    // Inicia el servidor una vez la conexión esté lista
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(colors.yellow(`🚀 Servidor corriendo en puerto ${PORT}`));
    });
  })
  .catch((err) => {
    console.error(colors.red(`❌ Error al conectar con Sequelize: ${err}`));
    process.exit(1);
  });

  app.get('/', async (_, res) => {
    try {
      const [result] = await sequelize.query('SELECT * FROM tbl_persona'); // ← ¡ojo con las comillas y paréntesis!
      console.log(colors.blue(`🔍 Datos obtenidos: ${JSON.stringify(result)}`));
      res.json(result);
    } catch (err) {
      console.error(colors.red(`❌ Error en la consulta: ${err}`));
      res.status(500).send('Error en la base de datos');
    }
  });

export default app;
