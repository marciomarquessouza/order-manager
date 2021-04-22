import { Order } from '@/entities/Order';
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
    });
});
