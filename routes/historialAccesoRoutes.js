// routes/historialAccesoRoutes.js
import express from 'express';
import {
  getHistorialAcceso,
  createRegistroAcceso,
  deleteRegistrosByIdClima
} from '../controllers/historialAccesoController.js';

const router = express.Router();

router.get('/historial-acceso', getHistorialAcceso);
router.post('/historial-acceso', createRegistroAcceso);
router.delete('/historial-acceso/deleteAll/clima/:Id_Clima', deleteRegistrosByIdClima);

export default router;
