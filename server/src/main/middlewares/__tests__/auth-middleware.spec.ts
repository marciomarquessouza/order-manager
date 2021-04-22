import { AuthByTokenSpy } from '@/presentation/auth/mock/mock-auth-by-token';
import { AuthByTokenMiddleware } from '../auth-by-token-middleware';

type SutTypes = {
    sut: AuthByTokenMiddleware;
    authByTokenSpy: AuthByTokenSpy;
};

const makeSut = (): SutTypes => {
    const authByTokenSpy = new AuthByTokenSpy();
    const sut = new AuthByTokenMiddleware(authByTokenSpy);
    return {
        sut,
        authByTokenSpy,
    };
};

describe('#Middleware | Authorizarion', () => {
    describe('when a new request with authentication by token is fired', () => {
        it('returns 403 when the authorization was not sent', async () => {
            const { sut } = makeSut();
            const response = await sut.handle({});
            expect(response.statusCode).toBe(403);
        });

        it('returns 403 when the authorization was sent without the bearer token', async () => {
            const { sut } = makeSut();
            const response = await sut.handle({ authorization: 'token' });
            expect(response.statusCode).toBe(403);
        });

        it('calls the authByToken with the correct parameters', async () => {
            const { sut, authByTokenSpy } = makeSut();
            await sut.handle({ authorization: 'Bearer my_token' });
            expect(authByTokenSpy.params).toEqual({ token: 'my_token' });
        });
    });
});
