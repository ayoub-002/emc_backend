import { Request, Response } from 'express';

const users = [
  {
    id: 'USR001',
    name: 'Ahmed Hassan',
    email: 'ahmed.hassan@email.com',
    phone: '+212-612-345-678',
    country: 'Morocco',
    totalSent: '$2,450.00',
    transactions: 12,
    status: 'verified',
    joinDate: '2023-01-15',
    lastActive: '2 hours ago',
    kycStatus: 'completed',
    riskLevel: 'low',
  },
  // ... more mock users
];

export function getUsers(req: Request, res: Response) {
  res.json(users);
}

export function getUserDetails(req: Request, res: Response) {
  const user = users.find(u => u.id === req.params.userId);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
}

export function updateUserStatus(req: Request, res: Response) {
  const user = users.find(u => u.id === req.params.userId);
  if (!user) return res.status(404).json({ error: 'User not found' });
  user.status = req.body.status;
  res.json({ message: 'User status updated', user });
}

export function sendUserEmail(req: Request, res: Response) {
  res.json({ message: 'Email sent to user' });
}

export function sendUserSMS(req: Request, res: Response) {
  res.json({ message: 'SMS sent to user' });
}

export function refundUser(req: Request, res: Response) {
  res.json({ message: 'Refund initiated for user' });
} 