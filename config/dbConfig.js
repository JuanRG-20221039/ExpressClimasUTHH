// config/dbConfig.js
require('dotenv').config(); // Cargar variables de entorno desde un archivo .env

const mysql = require('mysql2/promise'); // Usar promesas

// Configuración de la conexión usando variables de entorno
const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

// Crear la conexión
const pool = mysql.createPool(connectionConfig);

// Exportar el pool de conexiones para que se pueda usar en toda la aplicación
module.exports = pool;
