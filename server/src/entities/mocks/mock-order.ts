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

const orderA = { uid: faker.datatype.uuid(), ...params };
const orderB = { uid: faker.datatype.uuid(), ...params };

export const mockOrder = (): Order => orderA;

export const mockOrders = (): Order[] => [orderA, orderB];
