import { Router } from 'express';
import { makeCreateOrderController } from '../factories/create-order-controller.factory';
import { routeAdapter } from './routes.adapter';

export const orderRoutes = (router: Router): void => {
    router.post('/orders', routeAdapter(makeCreateOrderController()));
};
