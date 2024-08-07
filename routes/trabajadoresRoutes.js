// routes/trabajadoresRoutes.js
import express from 'express';
import {
  getTrabajadores,
  getTrabajadorPorId,
  createTrabajador,
  updateTrabajador,
  deleteTrabajador,
  getTrabajadorPorCorreo,
  iniciarSesionConClave,
  iniciarSesionConCorreo,
  obtenerTrabajadorPorClave
} from '../controllers/trabajadorController.js';

const router = express.Router();

router.get('/trabajadores', getTrabajadores);
router.get('/trabajadores/:Id_clave_trabajador', getTrabajadorPorId);
router.post('/trabajadores', createTrabajador);
router.put('/trabajadores/:Id_clave_trabajador', updateTrabajador);
router.delete('/trabajadores/:Id_clave_trabajador', deleteTrabajador);
router.get('/trabajadores/correo/:correo', getTrabajadorPorCorreo);
router.post('/trabajadores/loginClave', iniciarSesionConClave);
router.post('/trabajadores/loginCorreo', iniciarSesionConCorreo);
router.get('/trabajadores/clave/:Clave_trabajador', obtenerTrabajadorPorClave);

export default router;
