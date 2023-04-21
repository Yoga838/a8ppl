// lib/middleware.js

import { verify, sign } from 'jsonwebtoken';

const JWT_SECRET = 'My-Lover';

export function authMiddleware(handler) {
  return async (req, res) => {
    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader) {
      return res.status(401).json({ message: 'Authorization header is missing' });
    }

    const token = authorizationHeader.replace('Bearer ', '');

    try {
      const decoded = verify(token, JWT_SECRET);

      const now = Math.floor(Date.now() / 1000);
      const expiresAt = decoded.exp;

      if (expiresAt - now < 60 * 30) {
        const newToken = sign({ ...decoded, exp: now + 60 * 60 }, JWT_SECRET);
        res.setHeader('Authorization', `Bearer ${newToken}`);
      }

      req.user = decoded;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
}