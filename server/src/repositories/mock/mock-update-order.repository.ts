import { UpdateOrderRepository } from '../update-order.repository';
import faker from 'faker';
import { Order } from '@/entities/Order';
import { UpdateOrder } from '@/usecases/update-order/update-order.protocols';

export class UpdateOrderRepositorySpy implements UpdateOrderRepository {
    id: string;
    params: UpdateOrderRepository.Params;
    result: UpdateOrderRepository.Result;

    async update(data: UpdateOrder.Params, id: string): Promise<Order> {
        this.id = id;
        this.params = data;
        const mockRepositoryResult = {
            id,
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
        const updatedOrder = Object.assign({ ...mockRepositoryResult }, data);
        return updatedOrder;
    }
}
