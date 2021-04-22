import faker from 'faker';
import { UpdateOrder } from '../update-order.protocols';

export const mockUpdateOrderParams = (): UpdateOrder.Params => ({
    uid: faker.datatype.uuid(),
    title: faker.commerce.product(),
    bookingDate: faker.date.future().getDate() / 1000,
});

export class UpdateOrderSpy implements UpdateOrder {
    params: UpdateOrder.Params;

    async execute(data: UpdateOrder.Params): Promise<void> {
        this.params = data;
    }
}
