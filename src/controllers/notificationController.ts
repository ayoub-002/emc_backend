import { Request, Response } from 'express';
import Notification from '../models/Notification';

export async function sendEmail(req: Request, res: Response) {
  const { recipient, subject, content } = req.body;
  const notification = await Notification.create({ type: 'email', recipient, subject, content, status: 'sent', count: 1 });
  res.json(notification);
}

export async function sendSMS(req: Request, res: Response) {
  const { recipient, content } = req.body;
  const notification = await Notification.create({ type: 'sms', recipient, subject: '', content, status: 'sent', count: 1 });
  res.json(notification);
}

export async function getNotifications(req: Request, res: Response) {
  const notifications = await Notification.find().sort({ timestamp: -1 });
  res.json(notifications);
} 