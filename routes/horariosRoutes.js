// routes/horariosRoutes.js
import express from 'express';
import {
  getHorarios,
  getHorario,
  createHorario,
  updateHorario,
  deleteHorario,
  getHorariosPorAula,
  getHorarioPorAulaYHorasYDia,
  deleteHorariosPorAula
} from '../controllers/horarioController.js';

const router = express.Router();

router.get('/horarios', getHorarios);
router.get('/horarios/:Id_horario', getHorario);
router.post('/horarios', createHorario);
router.put('/horarios/:Id_horario', updateHorario);
router.delete('/horarios/:Id_horario', deleteHorario);
router.get('/horarios/aula/:idAula', getHorariosPorAula);
router.get('/horarios/:idAula/:idHoras/:idDia', getHorarioPorAulaYHorasYDia);
router.delete('/horarios/aula/:idAula', deleteHorariosPorAula);

export default router;
