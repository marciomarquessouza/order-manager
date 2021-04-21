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
        it('calls the create method with the appropriate params', async () => {
            const { sut, createOrderRepositorySpy } = makeSut();
            const orderParams = mockCreateOrderParams();
            await sut.execute(orderParams);
            expect(createOrderRepositorySpy.params).toBe(orderParams);
        });

        it('returns the user created in the repository', async () => {
            const { sut, createOrderRepositorySpy } = makeSut();
            const user = await sut.execute(mockCreateOrderParams());
            expect(user).toEqual(createOrderRepositorySpy.result);
        });
    });

    describe('when CreateOrderRepository throws an error', () => {
        it('thows a reject error as well', async () => {
            const { sut, createOrderRepositorySpy } = makeSut();
            jest.spyOn(createOrderRepositorySpy, 'create').mockImplementationOnce(() => {
                throw new Error();
            });
            const promise = sut.execute(mockCreateOrderParams());
            await expect(promise).rejects.toThrow();
        });
    });
});
