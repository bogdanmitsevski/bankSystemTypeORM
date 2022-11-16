import express from 'express';
import ClientController from '../controllers/clientController';
const router = express.Router();

router.post('/', ClientController.getName);

export default router;