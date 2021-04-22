import { FirebaseAuthByToken } from '@/infra/auth';
import { AuthByTokenMiddleware } from '../middlewares/auth-by-token-middleware';
import { Middleware } from '../middlewares/middleware.protocol';

export const makeAuthByTokenMiddleware = (): Middleware => {
    const firebaseAuthByToken = new FirebaseAuthByToken();
    const authByTokenMiddleware = new AuthByTokenMiddleware(firebaseAuthByToken);
    return authByTokenMiddleware;
};
