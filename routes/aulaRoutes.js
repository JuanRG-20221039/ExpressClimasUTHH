// routes/aulaRoutes.js
import express from 'express';
import {
    getAulas,
    crearAula,
    getAulaById,
    actualizarAula,
    eliminarAula,
    getAulasPorEdificio,
    getAulaPorNombreYEdificio,
    getAulaPorNombreEdificioTipo
} from '../controllers/aulasController.js'; // Ajusta la ruta según tu estructura

const router = express.Router();

// Definir rutas
router.get('/aulas', getAulas);
router.post('/aulas', crearAula);
router.get('/aulas/:id', getAulaById);
router.put('/aulas/:id', actualizarAula);
router.delete('/aulas/:id', eliminarAula);
router.get('/aulas/edificio/:idEdificio', getAulasPorEdificio);
router.get('/aulas/nombre/:nombreAula/edificio/:idEdificio', getAulaPorNombreYEdificio);
router.get('/aulas/nombre/:nombreAula/edificio/:idEdificio/tipo/:idTipo', getAulaPorNombreEdificioTipo);

export default router;
