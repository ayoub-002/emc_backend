import dotenv from 'dotenv';
dotenv.config();

import app from './app';

// Add these lines to insert a demo user
import mongoose from 'mongoose';
import User from './models/User'; // Adjust path if needed

const PORT = process.env.PORT || 3001;

// Insert demo user if not exists
mongoose.connection.once('open', async () => {
  const demoEmail = 'demo@example.com';
  const existing = await User.findOne({ email: demoEmail });
  if (!existing) {
    await User.create({
      name: 'Demo User',
      email: demoEmail,
      password: 'demopassword' // In production, hash passwords!
    });
    console.log('Demo user created');
  } else {
    console.log('Demo user already exists');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});