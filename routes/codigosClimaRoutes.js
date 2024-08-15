// routes/codigosClimaRoutes.js
import express from 'express';
import {
  getCodigosClima,
  getCodigoClima,
  createCodigoClima,
  updateCodigoClima,
  deleteCodigoClima,
  getCodigosClimaByClave,
  getCodigosClimaByIdMarca
} from '../controllers/codigosClimasController.js';

const router = express.Router();

router.get('/codigosClima', getCodigosClima);
router.get('/codigosClima/:Id_codigo', getCodigoClima);
router.post('/codigosClima', createCodigoClima);
router.put('/codigosClima/:Id_codigo', updateCodigoClima);
router.delete('/codigosClima/:Id_codigo', deleteCodigoClima);
// Nuevas rutas
router.get('/codigosClima/clave/:Clave', getCodigosClimaByClave);
router.get('/codigosClima/marca/:Id_marca', getCodigosClimaByIdMarca);

export default router;
