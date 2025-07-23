import { Request, Response } from 'express';

const chatUsers = [
  {
    id: 'USR001',
    name: 'Ahmed Hassan',
    lastMessage: 'Thank you for your help!',
    timestamp: '2 min ago',
    unread: 2,
    online: true,
    issue: 'Transaction Issue',
  },
  // ... more mock chat users
];

const chatMessages = {
  USR001: [
    {
      id: 1,
      sender: 'user',
      message: 'Hi, I have a question about my recent transaction TXN001',
      timestamp: '10:30 AM',
    },
    // ... more mock messages
  ],
  // ... more user message arrays
};

export function getChatUsers(req: Request, res: Response) {
  res.json(chatUsers);
}

export function getChatMessages(req: Request, res: Response) {
  const messages = chatMessages[req.params.userId] || [];
  res.json(messages);
}

export function sendMessage(req: Request, res: Response) {
  // Mock send message
  res.json({ message: 'Message sent!' });
} 