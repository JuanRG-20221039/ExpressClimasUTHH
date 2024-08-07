// routes/horasRoutes.js
import express from 'express';
import {
  getHoras,
  getHora,
  createHora,
  updateHora,
  deleteHora,
  getHoraByID,
  getHoraPorHoras
} from '../controllers/horasController.js';

const router = express.Router();

router.get('/horas', getHoras);
router.get('/horas/:Id_horas', getHora);
router.post('/horas', createHora);
router.put('/horas/:Id_horas', updateHora);
router.delete('/horas/:Id_horas', deleteHora);
router.get('/horas/:Id_horas', getHoraByID);
router.get('/horas/buscar/:horas', getHoraPorHoras);

export default router;
