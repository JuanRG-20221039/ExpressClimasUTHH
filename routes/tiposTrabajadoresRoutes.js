// routes/tiposTrabajadoresRoutes.js
import express from 'express';
import {
  getTiposTrabajadores,
  getTipoTrabajador,
  createTipoTrabajador,
  updateTipoTrabajador,
  deleteTipoTrabajador,
  getTipoTrabajadorByTipo
} from '../controllers/tipoTrabajadorController.js';

const router = express.Router();

router.get('/tiposTrabajadores', getTiposTrabajadores);
router.get('/tiposTrabajadores/:Id_tipo_de_trabajador', getTipoTrabajador);
router.post('/tiposTrabajadores', createTipoTrabajador);
router.put('/tiposTrabajadores/:Id_tipo_de_trabajador', updateTipoTrabajador);
router.delete('/tiposTrabajadores/:Id_tipo_de_trabajador', deleteTipoTrabajador);
router.get('/tiposTrabajadores/tipo/:Tipo_trabajador', getTipoTrabajadorByTipo);

export default router;
