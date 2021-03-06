import { LoadDevTokenRepositorySpy } from '@/data/mock/mock-load-devtoken.repository';
import { LoadDevToken } from '../load-dev-token.protocols';
import { LoadDevTokenUseCase } from '../load-dev-token.usecase';
import faker from 'faker';
import { CheckEnvironmentSpy } from '@/data/mock/mock-check-environment.repository';

type SutTypes = {
    sut: LoadDevToken;
    loadDevTokenRepositorySpy: LoadDevTokenRepositorySpy;
    checkEnvironmentSpy: CheckEnvironmentSpy;
};

const makeSut = (): SutTypes => {
    const loadDevTokenRepositorySpy = new LoadDevTokenRepositorySpy();
    const checkEnvironmentSpy = new CheckEnvironmentSpy();
    const sut = new LoadDevTokenUseCase(loadDevTokenRepositorySpy, checkEnvironmentSpy);
    return {
        sut,
        loadDevTokenRepositorySpy,
        checkEnvironmentSpy,
    };
};

describe('#Use Case | Load DevToken', () => {
    describe('when devToken is requested', () => {
        it('calls the loadDevToken method from repository properly', async () => {
            const { sut, loadDevTokenRepositorySpy } = makeSut();
            const params = { userId: faker.datatype.uuid() };
            await sut.execute(params);
            expect(loadDevTokenRepositorySpy.params).toBe(params);
        });

        describe('when an unexpected error happens', () => {
            it('thows a reject error', async () => {
                const { sut, loadDevTokenRepositorySpy } = makeSut();
                jest.spyOn(loadDevTokenRepositorySpy, 'load').mockImplementationOnce(() => {
                    throw new Error();
                });
                const params = { userId: faker.datatype.uuid() };
                const promise = sut.execute(params);
                await expect(promise).rejects.toThrow();
            });
        });

        describe('when the enviroment is not DEV', () => {
            it('thows an Unauthorized error', async () => {
                const { sut, checkEnvironmentSpy } = makeSut();
                checkEnvironmentSpy.result = { envName: 'PROD' };
                const params = { userId: faker.datatype.uuid() };
                const promise = sut.execute(params);
                await expect(promise).rejects.toThrowError('Unauthorized');
            });
        });
    });
});
