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

        it('returns 400 in validation error', async () => {
            const { sut, validationSpy } = makeSut();
            const request = mockUpdateOrderParams();
            validationSpy.error = new Error();
            const response = await sut.handle(request);
            expect(response.statusCode).toBe(400);
        });

        it('calls update order use case with the correct params', async () => {
            const { sut, updateOrderSpy } = makeSut();
            const request = mockUpdateOrderParams();
            await sut.handle(request);
            expect(updateOrderSpy.params).toBe(request);
        });

        it('returns 200 in success case', async () => {
            const { sut } = makeSut();
            const request = mockUpdateOrderParams();
            const response = await sut.handle(request);
            expect(response.statusCode).toBe(200);
        });

        it('returns 500 in error case', async () => {
            const { sut, updateOrderSpy } = makeSut();
            const request = mockUpdateOrderParams();
            jest.spyOn(updateOrderSpy, 'execute').mockImplementationOnce(() => {
                throw new Error();
            });
            const result = await sut.handle(request);
            expect(result.statusCode).toBe(500);
        });
    });
});
