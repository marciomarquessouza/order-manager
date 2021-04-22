import { AuthByToken } from '@/presentation/auth/auth-by-token.protocol';
import { forbiden, HttpResponse, ok } from '@/presentation/helpers';
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
                const userId = await this.authByToken.auth({ token });
                if (userId) {
                    return ok({ userId });
                }
            } else {
                return forbiden();
            }
        } catch (error) {}
    }
}
