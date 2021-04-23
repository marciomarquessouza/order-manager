import { AuthByTokenRepositorySpy } from '@/data/mock/mock-auth-by-token.repository';
import { AuthByToken } from '../auth-by-token.protocols';
import { AuthByTokenUseCase } from '../auth-by-token.usecase';
import { mockAuthByTokenParams } from '../mock/mock-auth-by-token-usecase';

type SutTypes = {
    sut: AuthByToken;
    authByTokenRepositorySpy: AuthByTokenRepositorySpy;
};

const makeSut = (): SutTypes => {
    const authByTokenRepositorySpy = new AuthByTokenRepositorySpy();
    const sut = new AuthByTokenUseCase(authByTokenRepositorySpy);
    return {
        sut,
        authByTokenRepositorySpy,
    };
};

describe('#Use Case | Auth By Token', () => {
    describe('when a new authentication by token is requested', () => {
        it('calls the authentication by token method from repository', async () => {
            const { sut, authByTokenRepositorySpy } = makeSut();
            const params = mockAuthByTokenParams();
            await sut.execute(params);
            expect(authByTokenRepositorySpy.params).toBe(params);
        });
    });
});
