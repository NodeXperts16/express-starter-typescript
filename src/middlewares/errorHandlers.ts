
import { NextFunction, Request, Response } from 'express';

export const error = (stack: boolean = false) => (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('error::', err);
  return res.status(err.status).json({
    data: err.data || [],
    message: err.isPublic ? err.message : 'Internal server error',
    stack: stack ? err.stack : '',
    status: 'error',
  });
};

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  return next({ status: 404, message: 'Not Found', isPublic: true });
};
