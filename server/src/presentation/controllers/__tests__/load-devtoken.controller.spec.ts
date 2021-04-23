import { LoadDevTokenSpy } from '@/usecases/load-devtoken/mock/mock-load-dev-token.usecase';
import { LoadDevTokenController } from '../load-devtoken.controller';
import faker from 'faker';

type SutTypes = {
    sut: LoadDevTokenController;
    loadDevTokenSpy: LoadDevTokenSpy;
};

const makeSut = (): SutTypes => {
    const loadDevTokenSpy = new LoadDevTokenSpy();
    const sut = new LoadDevTokenController(loadDevTokenSpy);
    return {
        sut,
        loadDevTokenSpy,
    };
};

describe('#Controller | Load DevToken', () => {
    describe('when the flow to load DevToken is called', () => {
        it('calls the load DevToken Use Case', async () => {
            const { sut, loadDevTokenSpy } = makeSut();
            const params = { userId: faker.datatype.uuid() };
            await sut.handle(params);
            expect(loadDevTokenSpy.params).toBe(params);
        });

        it.skip('returns 200 on success', async () => {
            const { sut } = makeSut();
            const result = await sut.handle();
            expect(result.statusCode).toBe(200);
        });

        it.skip('returns 204 in case of no contents', async () => {
            const { sut, loadOrdersSpy } = makeSut();
            loadOrdersSpy.result = [];
            const result = await sut.handle();
            expect(result.statusCode).toBe(204);
        });

        it.skip('returns 500 if thow an error ', async () => {
            const { sut, loadOrdersSpy } = makeSut();
            jest.spyOn(loadOrdersSpy, 'execute').mockImplementationOnce(() => {
                throw new Error();
            });
            const result = await sut.handle();
            expect(result.statusCode).toBe(500);
        });
    });
});
