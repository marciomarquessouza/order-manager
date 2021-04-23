import { FirebaseAuthByToken } from '@/infra/auth';
import { AuthByTokenUseCase } from '@/usecases/auth-by-token/auth-by-token.usecase';
import { AuthByTokenMiddleware } from '../middlewares/auth-by-token-middleware';
import { Middleware } from '../middlewares/middleware.protocol';

export const makeAuthByTokenMiddleware = (): Middleware => {
    const firebaseAuthByToken = new FirebaseAuthByToken();
    const authByTokenUseCase = new AuthByTokenUseCase(firebaseAuthByToken);
    const authByTokenMiddleware = new AuthByTokenMiddleware(authByTokenUseCase);
    return authByTokenMiddleware;
};
