// routes/tiposReporteRoutes.js
import express from 'express';
import {
  getTiposReporte,
  getTipoReporte,
  createTipoReporte,
  updateTipoReporte,
  deleteTipoReporte
} from '../controllers/tipoReporteController.js';

const router = express.Router();

router.get('/tiposReporte', getTiposReporte);
router.get('/tiposReporte/:Id_tipo_reporte', getTipoReporte);
router.post('/tiposReporte', createTipoReporte);
router.put('/tiposReporte/:Id_tipo_reporte', updateTipoReporte);
router.delete('/tiposReporte/:Id_tipo_reporte', deleteTipoReporte);

export default router;
