import { CreateOrder } from '../create-order.protocols';
import faker from 'faker';

export const mockCreateOrderParams = (): CreateOrder.Params => ({
    title: faker.commerce.product(),
    bookingDate: faker.date.future().getTime() / 1000,
    customer: {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    },
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        country: faker.address.country(),
        zip: faker.address.zipCode(),
    },
});

export class CreateOrderSpy implements CreateOrder {
    params: CreateOrder.Params;

    async execute(order: CreateOrder.Params): Promise<void> {
        this.params = order;
    }
}
