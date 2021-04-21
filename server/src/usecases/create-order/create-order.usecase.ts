import { Order } from '@/entities/Order';
import { CreateOrderRepository } from '@repositories/create-order.repository';
import { CreateOrder } from './create-order.interface';

export class CreateOrderUseCase implements CreateOrder {
    constructor(private readonly createOrderRepository: CreateOrderRepository) {}

    async execute(orderData: CreateOrder.Params): Promise<Order> {
        const order = await this.createOrderRepository.create(orderData);
        return order;
    }
}
