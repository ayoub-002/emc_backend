import { Router } from 'express';
import { getDashboardStats, getRecentTransactions } from '../controllers/dashboardController';

const router = Router();

router.get('/stats', getDashboardStats);
router.get('/recent-transactions', getRecentTransactions);

export default router; 