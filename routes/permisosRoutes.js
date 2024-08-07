// routes/permisosRoutes.js
import express from 'express';
import {
  getPermisos,
  getPermiso,
  createPermiso,
  updatePermiso,
  deletePermiso,
  getPermisosPorTrabajador,
  getPermisoPorTrabajadorYClima,
  deletePermisosPorTrabajador,
  deletePermisosByIdClima
} from '../controllers/permisosController.js';

const router = express.Router();

router.get('/permisos', getPermisos);
router.get('/permisos/:Id_permiso', getPermiso);
router.post('/permisos', createPermiso);
router.put('/permisos/:Id_permiso', updatePermiso);
router.delete('/permisos/:Id_permiso', deletePermiso);
router.get('/permisos/trabajador/:Id_clave_trabajador', getPermisosPorTrabajador);
router.get('/permisos/trabajador/:id_clave_trabajador/clima/:id_clima', getPermisoPorTrabajadorYClima);
router.delete('/permisos/trabajador/:id_clave_trabajador', deletePermisosPorTrabajador);
router.delete('/permisos/deleteAll/clima/:Id_clima', deletePermisosByIdClima);

export default router;
