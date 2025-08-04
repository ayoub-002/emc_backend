import { Request, Response } from 'express';
import Transaction from '../models/Transaction';

export async function getTransactions(req: Request, res: Response) {
  const transactions = await Transaction.find().populate('user');
  res.json(transactions);
}

export async function getTransactionDetails(req: Request, res: Response) {
  const txn = await Transaction.findById(req.params.transactionId).populate('user');
  if (!txn) return res.status(404).json({ error: 'Transaction not found' });
  res.json(txn);
} 