import express from 'express';
const router = express.Router();

router.use('/createBanker', require('./bankerRouter'));
router.use('/createClient', require('./clientRouter'));
router.use('/client/:clientId/transaction', require('../routes/transactionRouter'));

export default router;