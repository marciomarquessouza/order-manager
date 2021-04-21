import faker from 'faker';
import { UpdateOrder } from '../update-order.protocols';

export const mockUpdateOrderParams = (): UpdateOrder.Params => ({
    title: faker.commerce.product(),
    bookingDate: faker.date.future(),
});
