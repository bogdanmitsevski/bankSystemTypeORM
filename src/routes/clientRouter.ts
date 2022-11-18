import express from 'express';
import ClientController from '../controllers/clientController';
const router = express.Router();

router.post('/', ClientController.createClient);

module.exports = router;