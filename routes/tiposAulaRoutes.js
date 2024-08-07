// routes/tiposAulaRoutes.js
import express from 'express';
import {
  getTiposAula,
  getTipoAulaById,
  createTipoAula,
  updateTipoAula,
  deleteTipoAula,
  getTipoAulaByName
} from '../controllers/tiposAulasController.js';

const router = express.Router();

router.get('/tipos-aula', getTiposAula);
router.get('/tipos-aula/:Id_tipo_aula', getTipoAulaById);
router.post('/tipos-aula', createTipoAula);
router.put('/tipos-aula/:Id_tipo_aula', updateTipoAula);
router.delete('/tipos-aula/:Id_tipo_aula', deleteTipoAula);
router.get('/tipos-aula/nombre/:Tipo', getTipoAulaByName);

export default router;
