import { Router } from 'express';
import { makeLoadDevTokenController } from '../factories/load-devtoken-controller.factory';
import { routeAdapter } from './routes.adapter';

export const authRoutes = (router: Router): void => {
    router.post('/dev-token', routeAdapter(makeLoadDevTokenController()));
    router.get('/', (_, res) => res.status(200).json({ status: 'ok' }));
};
