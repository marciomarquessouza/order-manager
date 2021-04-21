import { UpdateOrderRepositorySpy } from '@/repositories/mock/mock-update-order.repository';
import { mockUpdateOrderParams } from '../mock/mock-update-order.usecase';
import { UpdateOrder } from '../update-order.protocols';
import { UpdateOrderUseCase } from '../update-order.usecase';
import faker from 'faker';

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

const orderId = faker.datatype.uuid();

describe('#Use Case | Update Order', () => {
    describe('when the order update use case is called', () => {
        it('calls the update method from repository with appropriate params ', async () => {
            const { sut, updateOrderRepositorySpy } = makeSut();
            const orderParams = mockUpdateOrderParams();
            await sut.execute(orderParams, orderId);
            expect(updateOrderRepositorySpy.params).toBe(orderParams);
        });

        it('returns true if the order has been updated in the repository', async () => {
            const { sut } = makeSut();
            const orderParams = mockUpdateOrderParams();
            const hasUpdated = await sut.execute(orderParams, orderId);
            expect(hasUpdated).toBe(true);
        });

        it('returns false if the order has not been updated in the repository', async () => {
            const { sut, updateOrderRepositorySpy } = makeSut();
            const orderParams = mockUpdateOrderParams();
            updateOrderRepositorySpy.result = false;
            const hasUpdated = await sut.execute(orderParams, orderId);
            expect(hasUpdated).toBe(false);
        });
    });
});
