//Conexion a postgres
import { Sequelize } from 'sequelize';
// import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config(); // Cargar variables de entorno desde .env

// Verificación de variables de entorno necesarias
if (!process.env.PG_HOST || !process.env.PG_USER || !process.env.PG_PASSWORD || !process.env.PG_NAME) {
  console.error('❌ Faltan variables de entorno. Asegúrate de que .env esté correctamente configurado.');
  process.exit(1); // Detener la ejecución si faltan las variables críticas
}

const sequelize = new Sequelize(
    process.env.PG_USER || '',
    process.env.PG_PASSWORD || '',
    process.env.PG_NAME || '',
    {
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT) || 5432,
      dialect: 'postgres',
      logging: false,
    }
);

//CONEXION DE PRUEBA
// Sequelize.connect()
//     .then(() => console.log('🔗 Conexión a PostgreSQL establecida'))
//     .catch(err => {
//         console.error('❌ Error al conectar a PostgreSQL:', err);
//         process.exit(1); // Detener el proceso en caso de error en la conexión
//     });
   
export default sequelize;
