import { Request, Response } from 'express';

export function getDashboardStats(req: Request, res: Response) {
  res.json({
    totalUsers: 12847,
    totalTransactions: 8329,
    totalVolume: 2400000,
    successRate: 98.2,
  });
}

export function getRecentTransactions(req: Request, res: Response) {
  res.json([
    {
      id: 'TXN001',
      user: 'Ahmed Hassan',
      amount: '$250.00',
      status: 'completed',
      destination: 'Morocco',
      time: '2 minutes ago',
    },
    // ... more mock recent transactions
  ]);
} 