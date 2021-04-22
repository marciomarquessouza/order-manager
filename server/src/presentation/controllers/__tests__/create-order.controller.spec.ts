import { ValidationSpy } from '@/presentation/validation/mock/mock-validation';
import { CreateOrder } from '@/usecases';
import {
    CreateOrderSpy,
    mockCreateOrderParams,
} from '@/usecases/create-order/mock/mock-create-order.usecase';
import { CreateOrderController } from '../create-order.controller';

type SutTypes = {
    sut: CreateOrderController;
    createOrderSpy: CreateOrderSpy;
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

        it('returns 400 if exists a validation error', async () => {
            const { sut, validationSpy } = makeSut();
            const request = mockCreateOrderParams();
            validationSpy.error = new Error();
            const response = await sut.handle(request);
            expect(response.statusCode).toBe(400);
        });

        it('calls the create order use case with the correct parameters', async () => {
            const { sut, createOrderSpy } = makeSut();
            const request = mockCreateOrderParams();
            await sut.handle(request);
            expect(createOrderSpy.params).toBe(request);
        });

        it('returns 201 in success case', async () => {
            const { sut } = makeSut();
            const request = mockCreateOrderParams();
            const response = await sut.handle(request);
            expect(response.statusCode).toBe(201);
        });
    });
});
