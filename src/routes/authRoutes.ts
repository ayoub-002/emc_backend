import { Router } from 'express';
import { login, resetPassword } from '../controllers/authController';

const router = Router();

router.post('/login', login);
router.post('/reset-password', resetPassword);

export default router; 