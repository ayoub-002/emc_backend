import { Request, Response } from 'express';

const transactions = [
  {
    id: 'TXN001',
    user: 'Ahmed Hassan',
    amount: '$250.00',
    fee: '$5.00',
    recipient: 'Hassan Family',
    destination: 'Morocco',
    status: 'completed',
    date: '2024-01-20',
    time: '14:30',
    method: 'Bank Transfer',
    reference: 'MT240120001',
  },
  // ... more mock transactions
];

export function getTransactions(req: Request, res: Response) {
  res.json(transactions);
}

export function getTransactionDetails(req: Request, res: Response) {
  const txn = transactions.find(t => t.id === req.params.transactionId);
  if (!txn) return res.status(404).json({ error: 'Transaction not found' });
  res.json(txn);
} 