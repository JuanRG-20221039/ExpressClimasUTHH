// routes/vinculacionIotRoutes.js
import express from 'express';
import {
  getVinculacionesIot,
  getVinculacionIot,
  createVinculacionIot,
  updateVinculacionIot,
  deleteVinculacionIot,
  getModuloIotById
} from '../controllers/vinculacionIotController.js';

const router = express.Router();

router.get('/vinculacion', getVinculacionesIot);
router.get('/vinculacion/:Id_vinculacion_iot', getVinculacionIot);
router.post('/vinculacion', createVinculacionIot);
router.put('/vinculacion/:Id_vinculacion_iot', updateVinculacionIot);
router.delete('/vinculacion/:Id_vinculacion_iot', deleteVinculacionIot);
router.get('/vinculacion/modulo/:id', getModuloIotById);

export default router;
