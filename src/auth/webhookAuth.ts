import { Request, Response, NextFunction } from 'express';
import { createHmac } from 'crypto';

export function webhookAuth(req: Request, res: Response, next: NextFunction) {
  const signature = req.header('X-Webhook-Signature');
  const payload = JSON.stringify(req.body);

  if (!signature) {
    return res.status(401).json({ error: 'Unauthorized: Missing X-Webhook-Signature header' });
  }

  const computedSignature = createHmac('sha256', process.env.WEBHOOK_SECRET || "").update(payload).digest('hex');

  if (signature !== computedSignature) {
    return res.status(401).json({ error: 'Unauthorized: Invalid X-Webhook-Signature header' });
  }

  // Request is authenticated, proceed to the next middleware or route handler
  next();
}
