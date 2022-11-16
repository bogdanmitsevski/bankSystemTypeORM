import express from 'express';
import BankerController from '../controllers/bankerController';
const router = express.Router();

router.post('/', BankerController.getData);

export default router;
