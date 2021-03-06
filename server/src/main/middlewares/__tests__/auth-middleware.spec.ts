import { AuthByTokenSpy } from '@/usecases/auth-by-token/mock/mock-auth-by-token-usecase';
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

        it('returns 200 when the token is valid', async () => {
            const { sut } = makeSut();
            const response = await sut.handle({ authorization: 'Bearer my_valid_token' });
            expect(response.statusCode).toBe(200);
        });

        it('returns 403 when the token is invalid', async () => {
            const { sut, authByTokenSpy } = makeSut();
            authByTokenSpy.result = null;
            const response = await sut.handle({ authorization: 'Bearer my_valid_token' });
            expect(response.statusCode).toBe(403);
        });

        describe('when thow an error', () => {
            it('returns 500', async () => {
                const { sut, authByTokenSpy } = makeSut();
                jest.spyOn(authByTokenSpy, 'execute').mockImplementationOnce(() => {
                    throw new Error();
                });
                const response = await sut.handle({ authorization: 'Bearer my_valid_token' });
                expect(response.statusCode).toBe(500);
            });
        });
    });
});
