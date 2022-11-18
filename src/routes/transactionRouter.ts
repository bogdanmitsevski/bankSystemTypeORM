import express from 'express';
import TransactionController from '../controllers/transactionController';

const router = express.Router();

router.post('/', TransactionController.createTransaction);

module.exports = router;