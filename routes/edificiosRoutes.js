// routes/edificiosRoutes.js
import express from 'express';
import {
  getEdificios,
  createEdificio,
  getEdificioPorId,
  updateEdificio,
  deleteEdificio,
  getEdificioPorNombre
} from '../controllers/edificiosController.js';

const router = express.Router();

router.get('/edificios', getEdificios);
router.post('/edificios', createEdificio);
router.get('/edificios/:id', getEdificioPorId);
router.put('/edificios/:id', updateEdificio);
router.delete('/edificios/:id', deleteEdificio);
router.get('/edificios/nombre/:nombre', getEdificioPorNombre);

export default router;
