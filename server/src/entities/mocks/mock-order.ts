import faker from 'faker';
import { Order } from '../Order';

const params = {
    title: faker.commerce.product(),
    bookingDate: faker.date.future(),
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
};

export const mockOrder = (): Order => new Order(params);

export const mockOrders = (): Order[] => [new Order(params), new Order(params)];
