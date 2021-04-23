import { LoadDevTokenRepositorySpy } from '@/data/mock/mock-load-devtoken.repository';
import { LoadDevToken } from '../load-dev-token.protocols';
import { LoadDevTokenUseCase } from '../load-dev-token.usecase';
import faker from 'faker';

type SutTypes = {
    sut: LoadDevToken;
    loadDevTokenRepositorySpy: LoadDevTokenRepositorySpy;
};

const makeSut = (): SutTypes => {
    const loadDevTokenRepositorySpy = new LoadDevTokenRepositorySpy();
    const sut = new LoadDevTokenUseCase(loadDevTokenRepositorySpy);
    return {
        sut,
        loadDevTokenRepositorySpy,
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
    });
});
