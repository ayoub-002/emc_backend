import mongoose, { Schema, Document } from 'mongoose';

export interface ITransaction extends Document {
  user: mongoose.Types.ObjectId;
  amount: number;
  fee: number;
  recipient: string;
  destination: string;
  status: string;
  date: Date;
  method: string;
  reference: string;
}

const TransactionSchema = new Schema<ITransaction>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  fee: { type: Number, required: true },
  recipient: String,
  destination: String,
  status: { type: String, default: 'pending' },
  date: { type: Date, default: Date.now },
  method: String,
  reference: String,
});

export default mongoose.model<ITransaction>('Transaction', TransactionSchema); 