// index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Importa el paquete cors
import sequelize from './config/sequelize.js'; // Importa la configuración de Sequelize

// Importa todas las rutas
import aulaRoutes from './routes/aulaRoutes.js';
import tiposAulaRoutes from './routes/tiposAulaRoutes.js';
import climasRoutes from './routes/climasRoutes.js';
import diasRoutes from './routes/diasRoutes.js';
import edificiosRoutes from './routes/edificiosRoutes.js';
import historialAccesoRoutes from './routes/historialAccesoRoutes.js';
import historicoIotRoutes from './routes/historicoIotRoutes.js';
import horariosRoutes from './routes/horariosRoutes.js';
import horasRoutes from './routes/horasRoutes.js';
import iotRoutes from './routes/iotRoutes.js';
import marcasRoutes from './routes/marcasRoutes.js';
import perfilesRoutes from './routes/perfilesRoutes.js';
import reportesUsuarioRoutes from './routes/reportesUsuarioRoutes.js';
import tiposReporteRoutes from './routes/tiposReporteRoutes.js';
import tiposTrabajadoresRoutes from './routes/tiposTrabajadoresRoutes.js';
import trabajadoresRoutes from './routes/trabajadoresRoutes.js';
import ubicacionesClimasRoutes from './routes/ubicacionesClimasRoutes.js';
import vinculacionIotRoutes from './routes/vinculacionIotRoutes.js';
import codigosClimaRoutes from './routes/codigosClimaRoutes.js';
import permisosRoutes from './routes/permisosRoutes.js';
import preguntasRoutes from './routes/preguntasRoutes.js';
import respuestasRoutes from './routes/respuestasRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Configura CORS
app.use(cors({
  origin: 'https://yoloxochitl.uthhtics.com', // Permite solicitudes solo desde este origen
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));

app.use(express.json()); // Permite que Express maneje JSON en las solicitudes

// Usar las rutas definidas con prefijo "/"
app.use('/', aulaRoutes);
app.use('/', tiposAulaRoutes);
app.use('/', climasRoutes);
app.use('/', diasRoutes);
app.use('/', edificiosRoutes);
app.use('/', historialAccesoRoutes);
app.use('/', historicoIotRoutes);
app.use('/', horariosRoutes);
app.use('/', horasRoutes);
app.use('/', iotRoutes);
app.use('/', marcasRoutes);
app.use('/', perfilesRoutes);
app.use('/', reportesUsuarioRoutes);
app.use('/', tiposReporteRoutes);
app.use('/', tiposTrabajadoresRoutes);
app.use('/', trabajadoresRoutes);
app.use('/', ubicacionesClimasRoutes);
app.use('/', vinculacionIotRoutes);
app.use('/', codigosClimaRoutes);
app.use('/', permisosRoutes);
app.use('/', preguntasRoutes);
app.use('/', respuestasRoutes);

// Definir rutas generales (opcional)
app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

// Sincronizar modelos y arrancar el servidor
const startServer = async () => {
  try {
    await sequelize.sync(); // Cambia a `{ force: true }` para recrear tablas en desarrollo

    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error al sincronizar los modelos:', error);
  }
};

startServer();
