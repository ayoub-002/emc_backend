import mongoose, { Schema, Document } from 'mongoose';

export interface INotification extends Document {
  type: string;
  recipient: string;
  subject: string;
  content: string;
  status: string;
  timestamp: Date;
  count: number;
}

const NotificationSchema = new Schema<INotification>({
  type: String,
  recipient: String,
  subject: String,
  content: String,
  status: String,
  timestamp: { type: Date, default: Date.now },
  count: Number,
});

export default mongoose.model<INotification>('Notification', NotificationSchema); 