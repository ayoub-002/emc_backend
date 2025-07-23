import { Request, Response } from 'express';

export function login(req: Request, res: Response) {
  const { email, password } = req.body;
  if (email === 'admin@moroccoin.com' && password === 'password') {
    return res.json({ token: 'mock-jwt-token', user: { email, name: 'Admin' } });
  }
  res.status(401).json({ error: 'Invalid credentials' });
}

export function resetPassword(req: Request, res: Response) {
  // Mock password reset
  res.json({ message: 'Password reset link sent to your email' });
} 