import { Request, Response } from 'express';

export function getExample(req: Request, res: Response) {
  res.json({ message: 'This is an example endpoint!' });
} 