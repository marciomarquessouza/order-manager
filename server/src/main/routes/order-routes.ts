import { Router } from 'express';
import {
    makeCreateOrderController,
    makeLoadOrdersController,
    makeUpdateOrderController,
    makeAuthByTokenMiddleware,
} from '../factories';
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

    router.get(
        '/orders',
        middlewareAdapter(makeAuthByTokenMiddleware()),
        routeAdapter(makeLoadOrdersController()),
    );
};
