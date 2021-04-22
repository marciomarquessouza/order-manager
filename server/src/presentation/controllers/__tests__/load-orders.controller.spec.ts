import { LoadOrdersSpy } from '@/usecases/load-orders/mock/mock-load-orders.usecase';
import { LoadOrdersController } from '../load-orders.controller';

type SutTypes = {
    sut: LoadOrdersController;
    loadOrdersSpy: LoadOrdersSpy;
};

const makeSut = (): SutTypes => {
    const loadOrdersSpy = new LoadOrdersSpy();
    const sut = new LoadOrdersController(loadOrdersSpy);
    return {
        sut,
        loadOrdersSpy,
    };
};

describe('#Controller | Load Orders', () => {
    describe('when the flow to load all orders is started', () => {
        it('calls the load order use case', async () => {
            const { sut, loadOrdersSpy } = makeSut();
            await sut.handle();
            expect(loadOrdersSpy.result).not.toBeUndefined();
        });

        it('returns 200 on success', async () => {
            const { sut } = makeSut();
            const result = await sut.handle();
            expect(result.statusCode).toBe(200);
        });

        it('returns 204 in case of no contents', async () => {
            const { sut, loadOrdersSpy } = makeSut();
            loadOrdersSpy.result = [];
            const result = await sut.handle();
            expect(result.statusCode).toBe(204);
        });

        it('returns 500 if thow an error ', async () => {
            const { sut, loadOrdersSpy } = makeSut();
            jest.spyOn(loadOrdersSpy, 'execute').mockImplementationOnce(() => {
                throw new Error();
            });
            const result = await sut.handle();
            expect(result.statusCode).toBe(500);
        });
    });
});
