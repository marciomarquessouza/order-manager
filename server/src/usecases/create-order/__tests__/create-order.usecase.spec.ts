import { CreateOrderUseCase } from '../create-order.usecase';
import { CreateOrder } from '../create-order.interface';
import { CreateOrderRepositorySpy } from '@repositories/mock/mock-create-order.repository';
import { mockCreateOrderParams } from '../mock/mock-create-order.user-case';

type SutTypes = {
    sut: CreateOrder;
    createOrderRepositorySpy: CreateOrderRepositorySpy;
};

const makeSut = (): SutTypes => {
    const createOrderRepositorySpy = new CreateOrderRepositorySpy();
    const sut = new CreateOrderUseCase(createOrderRepositorySpy);
    return {
        sut,
        createOrderRepositorySpy,
    };
};

describe('#Use Case | Create Order', () => {
    describe('when a new order is created', () => {
        it('calls the save method with the appropriate data', async () => {
            const { sut, createOrderRepositorySpy } = makeSut();
            const orderParams = mockCreateOrderParams();
            await sut.execute(orderParams);
            expect(createOrderRepositorySpy.params).toBe(orderParams);
        });
    });
});
