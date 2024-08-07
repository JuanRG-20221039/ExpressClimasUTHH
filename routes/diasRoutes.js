// routes/diasRoutes.js
import express from 'express';
import {
  getDias,
  createDia,
  updateDia,
  deleteDia,
  getDiaById
} from '../controllers/diasController.js';

const router = express.Router();

router.get('/dias', getDias);
router.post('/dias', createDia);
router.put('/dias/:id', updateDia);
router.delete('/dias/:id', deleteDia);
router.get('/dias/:id', getDiaById);

export default router;
