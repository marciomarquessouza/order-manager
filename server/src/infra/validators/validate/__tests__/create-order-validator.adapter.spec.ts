import { mockCreateOrderParams } from '@/usecases/create-order/mock/mock-create-order.usecase';
import { CreateOrderValidatorAdapter } from '../create-order-validator.adapter';

const makeSut = (): CreateOrderValidatorAdapter => {
    return new CreateOrderValidatorAdapter();
};

describe('#Infra - Validate | Create Order', () => {
    describe('when validate a new input', () => {
        it('returns null when all is correct', () => {
            const sut = makeSut();
            const params = mockCreateOrderParams();
            const response = sut.validate(params);
            expect(response).toBe(null);
        });

        it('returns an error when the params contain some invalid field', () => {
            const sut = makeSut();
            const params = mockCreateOrderParams();
            const response = sut.validate({ ...params, title: '' });
            expect(response).toBeInstanceOf(Error);
        });
    });
});
