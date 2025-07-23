import { Router } from 'express';
import { getChatUsers, getChatMessages, sendMessage } from '../controllers/chatController';

const router = Router();

router.get('/users', getChatUsers);
router.get('/messages/:userId', getChatMessages);
router.post('/messages/:userId', sendMessage);

export default router; 