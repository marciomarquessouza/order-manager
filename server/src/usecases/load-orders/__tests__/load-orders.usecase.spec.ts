import { LoadOrdersRepositorySpy } from '@/repositories/mock/mock-load-orders.repository';
import { LoadOrders } from '../load-orders.protocols';
import { LoadOrdersUseCase } from '../load-orders.usecase';

type SutTypes = {
    sut: LoadOrders;
    loadOrdersRepositorySpy: LoadOrdersRepositorySpy;
};

const makeSut = (): SutTypes => {
    const loadOrdersRepositorySpy = new LoadOrdersRepositorySpy();
    const sut = new LoadOrdersUseCase(loadOrdersRepositorySpy);
    return {
        sut,
        loadOrdersRepositorySpy,
    };
};

describe('#Use Case | Load Orders', () => {
    describe('when the load orders use case is called', () => {
        it('calls the load all method from repository', async () => {
            const { sut, loadOrdersRepositorySpy } = makeSut();
            const spy = jest.spyOn(loadOrdersRepositorySpy, 'loadAll');
            await sut.execute();
            expect(spy).toHaveBeenCalled();
        });
    });
});
