// routes/respuestasRoutes.js
import express from 'express';
import {
  getRespuestas,
  getRespuestaById,
  createRespuesta,
  updateRespuesta,
  deleteRespuesta,
  getRespuestasByTrabajadorId
} from '../controllers/respuestasController.js';

const router = express.Router();

router.get('/respuestas', getRespuestas);
router.get('/respuestas/:id', getRespuestaById);
router.post('/respuestas', createRespuesta);
router.put('/respuestas/:id', updateRespuesta);
router.delete('/respuestas/:id', deleteRespuesta);
router.get('/respuestas/trabajador/:id_clave_trabajador', getRespuestasByTrabajadorId);

export default router;
