import { Router } from 'express';
import { getUsers, getUserDetails, updateUserStatus, sendUserEmail, sendUserSMS, refundUser } from '../controllers/userController';

const router = Router();

router.get('/', getUsers);
router.get('/:userId', getUserDetails);
router.patch('/:userId/status', updateUserStatus);
router.post('/:userId/email', sendUserEmail);
router.post('/:userId/sms', sendUserSMS);
router.post('/:userId/refund', refundUser);

export default router; 