// routes/historicoIotRoutes.js
import express from 'express';
import {
  getHistoricoIOT,
  createRegistroHistoricoIOT,
  deleteRegistrosByVinculacionId
} from '../controllers/historicoIOTController.js';

const router = express.Router();

router.get('/historico-iot', getHistoricoIOT);
router.post('/historico-iot', createRegistroHistoricoIOT);
router.delete('/historico/eliminar/:id', deleteRegistrosByVinculacionId);

export default router;
