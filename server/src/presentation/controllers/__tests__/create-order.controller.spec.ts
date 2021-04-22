import { ValidationSpy } from '@/presentation/validation/mock/mock-validation';
import { CreateOrder } from '@/usecases';
import {
    CreateOrderSpy,
    mockCreateOrderParams,
} from '@/usecases/create-order/mock/mock-create-order.usecase';
import { CreateOrderController } from '../create-order.controller';

type SutTypes = {
    sut: CreateOrderController;
    createOrderSpy: CreateOrder;
    validationSpy: ValidationSpy;
};

const makeSut = (): SutTypes => {
    const createOrderSpy = new CreateOrderSpy();
    const validationSpy = new ValidationSpy();
    const sut = new CreateOrderController(createOrderSpy, validationSpy);
    return {
        sut,
        createOrderSpy,
        validationSpy,
    };
};

describe('#Controller | Create Order', () => {
    describe('when a new order is created', () => {
        it('validates the request values properly', async () => {
            const { sut, validationSpy } = makeSut();
            const request = mockCreateOrderParams();
            await sut.handle(request);
            expect(validationSpy.input).toBe(request);
        });
    });
});
