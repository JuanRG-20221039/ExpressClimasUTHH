// routes/climasRoutes.js
import express from 'express';
import {
  getClimas,
  getClimaById,
  createClima,
  updateClima,
  deleteClima,
  getClimasPorMarca,
  getClimaByVinculacionId
} from '../controllers/climasController.js';

const router = express.Router();

router.get('/climas', getClimas);
router.get('/climas/:id', getClimaById);
router.post('/climas', createClima);
router.put('/climas/:id', updateClima);
router.delete('/climas/:id', deleteClima);
router.get('/climas/marca/:idMarca', getClimasPorMarca);
router.get('/climas/vinculacion/:idVinculacion', getClimaByVinculacionId);

export default router;
