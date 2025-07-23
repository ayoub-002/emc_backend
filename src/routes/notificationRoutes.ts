import { Router } from 'express';
import { sendEmail, sendSMS, getNotifications } from '../controllers/notificationController';

const router = Router();

router.post('/email', sendEmail);
router.post('/sms', sendSMS);
router.get('/', getNotifications);

export default router; 