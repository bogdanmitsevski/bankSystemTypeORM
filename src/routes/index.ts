import express from 'express';
const router = express.Router();

router.use('/createBanker', require('../routes/bankerRouter'));
router.use('/createClient', require('../controllers/clientController'));

export default router;