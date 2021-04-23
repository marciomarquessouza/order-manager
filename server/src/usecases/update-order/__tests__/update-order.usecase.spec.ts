import { UpdateOrderRepositorySpy } from '@/data/mock/mock-update-order.repository';
import { mockUpdateOrderParams } from '../mock/mock-update-order.usecase';
import { UpdateOrder } from '../update-order.protocols';
import { UpdateOrderUseCase } from '../update-order.usecase';

type SutTypes = {
    sut: UpdateOrder;
    updateOrderRepositorySpy: UpdateOrderRepositorySpy;
};

const makeSut = (): SutTypes => {
    const updateOrderRepositorySpy = new UpdateOrderRepositorySpy();
    const sut = new UpdateOrderUseCase(updateOrderRepositorySpy);
    return {
        sut,
        updateOrderRepositorySpy,
    };
};

describe('#Use Case | Update Order', () => {
    describe('when the order update use case is called', () => {
        it('calls the update method from repository with appropriate params ', async () => {
            const { sut, updateOrderRepositorySpy } = makeSut();
            const orderParams = mockUpdateOrderParams();
            await sut.execute(orderParams);
            expect(updateOrderRepositorySpy.params).toBe(orderParams);
        });

        describe('when UpdateOrder Repository throws an error', () => {
            it('throws a rejected error', async () => {
                const { sut, updateOrderRepositorySpy } = makeSut();
                jest.spyOn(updateOrderRepositorySpy, 'update').mockImplementationOnce(() => {
                    throw new Error();
                });
                const promise = sut.execute(mockUpdateOrderParams());
                await expect(promise).rejects.toThrow();
            });
        });
    });
});
