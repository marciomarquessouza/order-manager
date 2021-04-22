import { ValidationSpy } from '@/presentation/validation/mock/mock-validation';
import {
    mockUpdateOrderParams,
    UpdateOrderSpy,
} from '@/usecases/update-order/mock/mock-update-order.usecase';
import { UpdateOrderController } from '../update-order.controller';

type SutTypes = {
    sut: UpdateOrderController;
    updateOrderSpy: UpdateOrderSpy;
    validationSpy: ValidationSpy;
};

const makeSut = (): SutTypes => {
    const updateOrderSpy = new UpdateOrderSpy();
    const validationSpy = new ValidationSpy();
    const sut = new UpdateOrderController(updateOrderSpy, validationSpy);
    return {
        sut,
        updateOrderSpy,
        validationSpy,
    };
};

describe('#Controller | Update Order', () => {
    describe('when update an Order', () => {
        it('validates the requet fields', async () => {
            const { sut, validationSpy } = makeSut();
            const request = mockUpdateOrderParams();
            await sut.handle(request);
            expect(validationSpy.input).toBe(request);
        });
    });
});
