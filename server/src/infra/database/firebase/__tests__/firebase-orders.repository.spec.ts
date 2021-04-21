import { mockOrder, mockOrders } from '@/entities/mocks/mock-order';
import { mockCreateOrderParams } from '@/usecases/create-order/mock/mock-create-order.usecase';
import { FirebaseOrderRepository } from '../firebase-orders.repository';

const setSpy = jest.fn();

jest.mock('../firebase-helper', () => ({
    FirebaseHelper: {
        initialize: jest.fn(),
        getCollection: () => ({
            doc: () => ({
                set: setSpy,
            }),
            get: jest.fn().mockResolvedValueOnce({
                empty: false,
                docs: [{ data: () => ({ ...mockOrder(), uid: 'orderId' }) }],
            }),
        }),
        getUid: () => 'orderId',
    },
}));

const makeSut = (): FirebaseOrderRepository => {
    return new FirebaseOrderRepository();
};

describe('#Firebase Database | Create Order', () => {
    describe('create()', () => {
        describe('when new order is created', () => {
            it('calls the set command from firebase with correct parameters', async () => {
                const sut = makeSut();
                const createOrderParams = mockCreateOrderParams();
                await sut.create(createOrderParams);
                expect(setSpy).toHaveBeenCalledWith({ uid: 'orderId', ...createOrderParams });
            });
        });
    });

    describe('loadAll()', () => {
        describe('when the loadAll method is called', () => {
            it('returns all orders available in the repository', async () => {
                const sut = makeSut();
                const orders = await sut.loadAll();
                expect(orders).toEqual([{ ...mockOrder(), uid: 'orderId' }]);
            });
        });
    });
});
