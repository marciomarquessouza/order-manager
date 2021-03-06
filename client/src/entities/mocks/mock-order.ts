import faker from 'faker';
import { title } from 'node:process';
import { IOrder } from '../IOrder';

const params = {
    title: faker.commerce.product(),
    bookingDate: new Date().valueOf(),
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

const orderA: IOrder = { uid: faker.datatype.uuid(), ...params };
const orderB: IOrder = { uid: faker.datatype.uuid(), ...params };

export const mockOrder = (): IOrder => orderA;

export const mockOrders = (): IOrder[] => [orderA, orderB];

export const createOrderProps = (): Omit<IOrder, 'uid'> => ({
    title: '',
    bookingDate: new Date().valueOf(),
    customer: {
        name: '',
        email: '',
        phone: '',
    },
    address: {
        street: '',
        city: '',
        country: '',
        zip: '',
    },
});
