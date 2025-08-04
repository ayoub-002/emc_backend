import { Request, Response } from 'express';
import User from '../models/User';
import Transaction from '../models/Transaction';

export async function getDashboardStats(req: Request, res: Response) {
  const totalUsers = await User.countDocuments();
  const totalTransactions = await Transaction.countDocuments();
  const totalVolumeAgg = await Transaction.aggregate([
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);
  const totalVolume = totalVolumeAgg[0]?.total || 0;
  const successRate = await Transaction.countDocuments({ status: 'completed' }) / (totalTransactions || 1) * 100;
  res.json({ totalUsers, totalTransactions, totalVolume, successRate });
}

export async function getRecentTransactions(req: Request, res: Response) {
  const recent = await Transaction.find().sort({ date: -1 }).limit(10).populate('user');
  res.json(recent);
} 