import mongoose, { Schema, Document } from 'mongoose';

export interface IChatMessage extends Document {
  user: mongoose.Types.ObjectId;
  sender: string;
  message: string;
  timestamp: Date;
}

const ChatMessageSchema = new Schema<IChatMessage>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  sender: { type: String, enum: ['user', 'admin'], required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model<IChatMessage>('ChatMessage', ChatMessageSchema); 