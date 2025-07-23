import { Request, Response } from 'express';

const notifications = [
  {
    id: 1,
    type: 'email',
    recipient: 'All Users',
    subject: 'System Maintenance Notice',
    status: 'sent',
    timestamp: '2 hours ago',
    count: 1247,
  },
  // ... more mock notifications
];

export function sendEmail(req: Request, res: Response) {
  res.json({ message: 'Email sent!' });
}

export function sendSMS(req: Request, res: Response) {
  res.json({ message: 'SMS sent!' });
}

export function getNotifications(req: Request, res: Response) {
  res.json(notifications);
} 