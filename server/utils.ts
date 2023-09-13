import { Request } from 'express';

export const getLocale = (req: Request) =>
  req.headers['accept-language']?.split(',')[0].split(';')[0] ?? 'en-US';
