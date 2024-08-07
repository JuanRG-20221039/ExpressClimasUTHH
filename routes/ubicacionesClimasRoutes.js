// routes/ubicacionesClimasRoutes.js
import express from 'express';
import {
  getUbicacionesClimas,
  getUbicacionClima,
  createUbicacionClima,
  updateUbicacionClima,
  deleteUbicacionClima,
  getUbicacionesClimasPorAula,
  getUbicacionClimaPorIdClima
} from '../controllers/ubicacionClimaController.js';

const router = express.Router();

router.get('/ubicaciones-climas', getUbicacionesClimas);
router.get('/ubicaciones-climas/:Id_ubicacion_Clima', getUbicacionClima);
router.post('/ubicaciones-climas', createUbicacionClima);
router.put('/ubicaciones-climas/:Id_ubicacion_Clima', updateUbicacionClima);
router.delete('/ubicaciones-climas/:Id_ubicacion_Clima', deleteUbicacionClima);
router.get('/ubicaciones-climas/aula/:idAula', getUbicacionesClimasPorAula);
router.get('/ubicaciones-climas/clima/:idClima', getUbicacionClimaPorIdClima);

export default router;
