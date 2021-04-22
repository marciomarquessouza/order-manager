import { NextFunction, Request, Response } from 'express';
import { Middleware } from './middleware.protocol';

export const middlewareAdapter = (middleware: Middleware) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const request = { ...(req.header || {}) };
        const response = await middleware.handle(request);
        if (response.statusCode === 200) {
            Object.assign(req, response.body);
            next();
        } else {
            res.status(response.statusCode).json({
                error: response.body.message,
            });
        }
    };
};
