import { CreateOrderRepository } from '@repositories/create-order.repository';
import { CreateOrder } from '@usecases/create-order/create-order.interface';
import faker from 'faker';

export class CreateOrderRepositorySpy implements CreateOrderRepository {
    public params: CreateOrderRepository.Params;
    result: CreateOrder.Result = {
        id: faker.datatype.uuid(),
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

    async create(data: CreateOrder.Params): Promise<CreateOrder.Result> {
        this.params = data;
        return this.result;
    }
}
