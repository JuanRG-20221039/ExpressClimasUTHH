// routes/preguntasRoutes.js
import express from 'express';
import {
  getPreguntas,
  getPreguntaById,
  createPregunta,
  updatePregunta,
  deletePregunta
} from '../controllers/preguntasController.js';

const router = express.Router();

router.get('/preguntas', getPreguntas);
router.get('/preguntas/:id', getPreguntaById);
router.post('/preguntas', createPregunta);
router.put('/preguntas/:id', updatePregunta);
router.delete('/preguntas/:id', deletePregunta);

export default router;
