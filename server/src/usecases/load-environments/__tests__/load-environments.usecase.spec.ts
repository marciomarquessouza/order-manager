import { LoadEnvironmentsSpy } from '@/data/mock/mock-load-environments.repository';
import { LoadEnvironments } from '../load-environments.protocol';
import { LoadEnvironmentsUseCase } from '../load-environments.usecase';

type SutTypes = {
    sut: LoadEnvironments;
    loadEnvironmentsSpy: LoadEnvironmentsSpy;
};

const makeSut = (): SutTypes => {
    const loadEnvironmentsSpy = new LoadEnvironmentsSpy();
    const sut = new LoadEnvironmentsUseCase(loadEnvironmentsSpy);
    return {
        sut,
        loadEnvironmentsSpy,
    };
};

describe('#Use Case | Load Environments', () => {
    describe('list the environments', () => {
        it('calls the loadEnvironment method from repository properly', async () => {
            const { sut, loadEnvironmentsSpy } = makeSut();
            const envList = sut.execute();
            expect(envList).toEqual(loadEnvironmentsSpy.result);
        });
    });
});
