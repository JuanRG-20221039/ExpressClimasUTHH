// routes/perfilesRoutes.js
import express from 'express';
import {
  getPerfiles,
  getPerfil,
  createPerfil,
  updatePerfil,
  deletePerfil
} from '../controllers/perfilController.js';

const router = express.Router();

router.get('/perfiles', getPerfiles);
router.get('/perfiles/:Id_perfil', getPerfil);
router.post('/perfiles', createPerfil);
router.put('/perfiles/:Id_perfil', updatePerfil);
router.delete('/perfiles/:Id_perfil', deletePerfil);

export default router;
