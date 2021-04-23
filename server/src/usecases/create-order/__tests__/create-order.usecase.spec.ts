import { CreateOrderUseCase } from '../create-order.usecase';
import { CreateOrder } from '../create-order.protocols';
import { CreateOrderRepositorySpy } from '@/data/mock/mock-create-order.repository';
import { mockCreateOrderParams } from '../mock/mock-create-order.usecase';

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
        it('calls the create method with the appropriate params', async () => {
            const { sut, createOrderRepositorySpy } = makeSut();
            const orderParams = mockCreateOrderParams();
            await sut.execute(orderParams);
            expect(createOrderRepositorySpy.params).toBe(orderParams);
        });

        describe('when an unexpected error happens', () => {
            it('thows a reject error', async () => {
                const { sut, createOrderRepositorySpy } = makeSut();
                jest.spyOn(createOrderRepositorySpy, 'create').mockImplementationOnce(() => {
                    throw new Error();
                });
                const promise = sut.execute(mockCreateOrderParams());
                await expect(promise).rejects.toThrow();
            });
        });
    });
});
