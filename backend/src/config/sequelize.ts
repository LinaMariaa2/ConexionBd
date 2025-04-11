import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
  database: process.env.PG_NAME as string,
  username: process.env.PG_USER as string,
  password: process.env.PG_PASSWORD as string,
  host: process.env.PG_HOST as string,
  port: parseInt(process.env.PG_PORT as string, 10),
  dialect: 'postgres', // 👈 CAMBIADO A POSTGRES
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
console.log("Contraseña obtenida del .env:", process.env.PG_PASSWORD);
console.log("NAME", process.env.PG_NAME);
console.log("USER", process.env.PG_USER);
console.log("PORT", process.env.PG_PORT);
console.log("HORT", process.env.PG_HOST);
export default sequelize;

