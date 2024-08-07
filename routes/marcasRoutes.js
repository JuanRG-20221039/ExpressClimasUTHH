// routes/marcasRoutes.js
import express from 'express';
import {
  getMarcas,
  getMarca,
  createMarca,
  updateMarca,
  deleteMarca,
  getMarcaByNombre
} from '../controllers/marcaController.js';

const router = express.Router();

router.get('/marcas', getMarcas);
router.get('/marcas/:Id_marca', getMarca);
router.post('/marcas', createMarca);
router.put('/marcas/:Id_marca', updateMarca);
router.delete('/marcas/:Id_marca', deleteMarca);
router.get('/marcas/nombre/:nombre', getMarcaByNombre);

export default router;
