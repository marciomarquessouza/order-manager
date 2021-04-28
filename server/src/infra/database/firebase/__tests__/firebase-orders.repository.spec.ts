import { mockOrder } from '@/entities/mocks/mock-order';
import { mockCreateOrderParams } from '@/usecases/create-order/mock/mock-create-order.usecase';
import { mockUpdateOrderParams } from '@/usecases/update-order/mock/mock-update-order.usecase';
import { FirebaseOrderRepository } from '../firebase-orders.repository';

const setSpy = jest.fn();
const updateSpy = jest.fn();
const uid = 'orderId';

jest.mock('../firebase-helper', () => ({
    FirebaseHelper: {
        initialize: jest.fn(),
        getCollection: () => ({
            doc: () => ({
                set: setSpy,
                update: updateSpy,
            }),
            get: jest.fn().mockResolvedValueOnce({
                empty: false,
                docs: [{ data: () => ({ ...mockOrder(), uid }) }],
            }),
        }),
        parserResult: jest.fn().mockReturnValueOnce({ ...mockOrder(), uid: 'orderId' }),
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
                expect(setSpy).toHaveBeenCalledWith({ uid, ...createOrderParams });
            });
        });
    });

    describe('loadAll()', () => {
        describe('when the loadAll method is called', () => {
            it('returns all orders available in the repository', async () => {
                const sut = makeSut();
                const orders = await sut.loadAll();
                expect(orders).toEqual([{ ...mockOrder(), uid }]);
            });
        });
    });

    describe('update()', () => {
        describe('when update an order', () => {
            it('call the firebase update method', async () => {
                const sut = makeSut();
                const updateOrderParams = mockUpdateOrderParams();
                await sut.update(updateOrderParams);
                expect(updateSpy).toHaveBeenCalledWith(updateOrderParams);
            });
        });
    });
});
