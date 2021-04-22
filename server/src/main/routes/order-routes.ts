import { Router } from 'express';
import { makeUpdateOrderController } from '../factories';
import { makeAuthByTokenMiddleware } from '../factories/auth-by-token-middleware.factory';
import { makeCreateOrderController } from '../factories/create-order-controller.factory';
import { middlewareAdapter } from '../middlewares/middleware.adapter';
import { routeAdapter } from './routes.adapter';

export const orderRoutes = (router: Router): void => {
    router.post(
        '/orders',
        middlewareAdapter(makeAuthByTokenMiddleware()),
        routeAdapter(makeCreateOrderController()),
    );

    router.put(
        '/orders/:uid',
        middlewareAdapter(makeAuthByTokenMiddleware()),
        routeAdapter(makeUpdateOrderController()),
    );
};
