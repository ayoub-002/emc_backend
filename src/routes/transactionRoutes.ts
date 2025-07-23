import { Router } from 'express';
import { getTransactions, getTransactionDetails } from '../controllers/transactionController';

const router = Router();

router.get('/', getTransactions);
router.get('/:transactionId', getTransactionDetails);

export default router; 