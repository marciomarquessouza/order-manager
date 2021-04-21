import { mockCreateOrderParams } from '@/usecases/create-order/mock/mock-create-order.usecase';
import { FirebaseOrderRepository } from '../firebase-orders.repository';
import { uuid } from 'uuidv4';

const setSpy = jest.fn();

jest.mock('../firebase-helper', () => ({
    FirebaseHelper: {
        initialize: jest.fn(),
        getCollection: () => ({
            doc: () => ({
                set: setSpy,
            }),
        }),
    },
}));

const makeSut = (): FirebaseOrderRepository => {
    return new FirebaseOrderRepository();
};

const uid = uuid();

describe('#Firebase Database | Create Order', () => {
    describe('create()', () => {
        describe('when new order is created', () => {
            it('calls the set command from firebase with correct parameters', async () => {
                const sut = makeSut();
                const parameter = { uid, ...mockCreateOrderParams() };
                await sut.create(parameter);
                expect(setSpy).toHaveBeenCalledWith(parameter);
            });
        });
    });
});
