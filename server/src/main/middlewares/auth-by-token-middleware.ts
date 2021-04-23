import { AuthByToken } from '@/usecases/auth-by-token/auth-by-token.protocols';
import { forbiden, HttpResponse, ok, serverError } from '@/presentation/helpers';
import { Middleware } from './middleware.protocol';

export namespace AuthByTokenMiddleware {
    export type request = {
        authorization?: string;
    };
}

export class AuthByTokenMiddleware implements Middleware<AuthByTokenMiddleware.request> {
    constructor(private readonly authByToken: AuthByToken) {}

    async handle(request: AuthByTokenMiddleware.request): Promise<HttpResponse> {
        try {
            const { authorization } = request;

            if (authorization && authorization.startsWith('Bearer ')) {
                const token = authorization.replace(/^Bearer\s/, '');
                const userId = await this.authByToken.execute({ token });
                if (userId) {
                    return ok({ userId });
                }
            }

            return forbiden();
        } catch (error) {
            return serverError(error);
        }
    }
}
