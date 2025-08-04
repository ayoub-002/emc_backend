import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  country: string;
  status: string;
  joinDate: Date;
  lastActive: Date;
  kycStatus: string;
  riskLevel: string;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
  country: String,
  status: { type: String, default: 'pending' },
  joinDate: { type: Date, default: Date.now },
  lastActive: { type: Date, default: Date.now },
  kycStatus: { type: String, default: 'pending' },
  riskLevel: { type: String, default: 'low' },
});

export default mongoose.model<IUser>('User', UserSchema); 