import { Request, Response } from 'express';
import ChatMessage from '../models/ChatMessage';
import User from '../models/User';

export async function getChatUsers(req: Request, res: Response) {
  // Return users who have chat messages
  const userIds = await ChatMessage.distinct('user');
  const users = await User.find({ _id: { $in: userIds } });
  res.json(users);
}

export async function getChatMessages(req: Request, res: Response) {
  const messages = await ChatMessage.find({ user: req.params.userId }).sort({ timestamp: 1 });
  res.json(messages);
}

export async function sendMessage(req: Request, res: Response) {
  const { userId } = req.params;
  const { sender, message } = req.body;
  const chatMessage = await ChatMessage.create({ user: userId, sender, message });
  res.json(chatMessage);
} 