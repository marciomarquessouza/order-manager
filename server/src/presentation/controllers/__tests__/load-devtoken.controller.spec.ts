import { LoadDevTokenRepositorySpy } from '@/data/mock/mock-load-devtoken.repository';
import { LoadDevTokenUseCase } from '@/usecases/load-devtoken/load-dev-token.usecase';
import { LoadDevTokenController } from '../load-devtoken.controller';
import faker from 'faker';
import { CheckEnvironmentSpy } from '@/data/mock/mock-check-environment.repository';

type SutTypes = {
    sut: LoadDevTokenController;
    loadDevTokenRepositorySpy: LoadDevTokenRepositorySpy;
    checkEnvironment: CheckEnvironmentSpy;
};

const makeSut = (): SutTypes => {
    const loadDevTokenRepositorySpy = new LoadDevTokenRepositorySpy();
    const checkEnvironment = new CheckEnvironmentSpy();
    const loadDevTokenUseCase = new LoadDevTokenUseCase(
        loadDevTokenRepositorySpy,
        checkEnvironment,
    );
    const sut = new LoadDevTokenController(loadDevTokenUseCase);
    return {
        sut,
        loadDevTokenRepositorySpy,
        checkEnvironment,
    };
};

describe('#Controller | Load DevToken', () => {
    describe('when the flow to load DevToken is called', () => {
        it('calls the load DevToken Use Case', async () => {
            const { sut, loadDevTokenRepositorySpy } = makeSut();
            const params = { userId: faker.datatype.uuid() };
            await sut.handle(params);
            expect(loadDevTokenRepositorySpy.params).toBe(params);
        });

        it('returns 200 on success', async () => {
            const { sut } = makeSut();
            const params = { userId: faker.datatype.uuid() };
            const result = await sut.handle(params);
            expect(result.statusCode).toBe(200);
        });

        it('returns 401 when the environment is not DEV', async () => {
            const { sut, checkEnvironment } = makeSut();
            checkEnvironment.result = { envName: 'PROD' };
            const params = { userId: faker.datatype.uuid() };
            const result = await sut.handle(params);
            expect(result.statusCode).toBe(401);
        });

        it('returns 500 if thow an error ', async () => {
            const { sut, loadDevTokenRepositorySpy } = makeSut();
            jest.spyOn(loadDevTokenRepositorySpy, 'load').mockImplementationOnce(() => {
                throw new Error();
            });
            const params = { userId: faker.datatype.uuid() };
            const result = await sut.handle(params);
            expect(result.statusCode).toBe(500);
        });
    });
});
