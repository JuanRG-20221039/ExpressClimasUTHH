// routes/iotRoutes.js
import express from 'express';
import {
  getIoTDevices,
  getIoTDevice,
  createIoTDevice,
  updateIoTDevice,
  deleteIoTDevice,
  getIoTDeviceByMac,
  getIoTDeviceMacById,
  getIoTDeviceAliasById,
  updateIoTDeviceEstado
} from '../controllers/iotController.js';

const router = express.Router();

router.get('/iot', getIoTDevices);
router.get('/iot/:Id_iot', getIoTDevice);
router.post('/iot', createIoTDevice);
router.put('/iot/:Id_iot', updateIoTDevice);
router.put('/iot/estado_clima/:Id_iot', updateIoTDeviceEstado);
router.delete('/iot/:Id_iot', deleteIoTDevice);
router.get('/iot/mac/:mac', getIoTDeviceByMac);
router.get('/iot/mac_id/:Id_iot', getIoTDeviceMacById);
router.get('/iot/alias_id/:Id_iot', getIoTDeviceAliasById);

export default router;
