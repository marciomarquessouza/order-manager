import { Express, Router } from 'express';
import { orderRoutes } from '../routes';

export const setupRoutes = (app: Express): void => {
    const router = Router();
    app.use('/api', router);
    orderRoutes(router);
};
