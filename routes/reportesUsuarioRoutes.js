// routes/reportesUsuarioRoutes.js
import express from 'express';
import {
  getReportesUsuario,
  getReporteUsuario,
  createReporteUsuario,
  updateReporteUsuario,
  deleteReporteUsuario,
  getReportesPorAula,
  deleteReportesPorAula
} from '../controllers/reporteUsuarioController.js';

const router = express.Router();

router.get('/reportesUsuario', getReportesUsuario);
router.get('/reportesUsuario/:Id_reporte_usuario', getReporteUsuario);
router.post('/reportesUsuario', createReporteUsuario);
router.put('/reportesUsuario/:Id_reporte_usuario', updateReporteUsuario);
router.delete('/reportesUsuario/:Id_reporte_usuario', deleteReporteUsuario);
router.get('/reportes/aula/:idAula', getReportesPorAula);
router.delete('/reportes/aula/:idAula', deleteReportesPorAula);

export default router;
