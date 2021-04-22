import { mockUpdateOrderParams } from '@/usecases/update-order/mock/mock-update-order.usecase';
import { UpdateOrderValidatorAdapter } from '../update-order-validator.adapter';

const makeSut = (): UpdateOrderValidatorAdapter => {
    return new UpdateOrderValidatorAdapter();
};

describe('#Infra - Validate | Update Order', () => {
    describe('when validate a new input', () => {
        it('returns null when all is correct', () => {
            const sut = makeSut();
            const params = mockUpdateOrderParams();
            const response = sut.validate(params);
            expect(response).toBe(null);
        });

        it('returns an error when the params contain some invalid field', () => {
            const sut = makeSut();
            const params = mockUpdateOrderParams();
            const response = sut.validate({ ...params, title: '' });
            expect(response).toBeInstanceOf(Error);
        });
    });
});
