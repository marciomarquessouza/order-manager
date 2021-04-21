import { Order } from '@/entities/Order';
import { CreateOrderRepository } from '@repositories/create-order.repository';
import { CreateOrder } from './create-order.protocols';

export class CreateOrderUseCase implements CreateOrder {
    constructor(private readonly createOrderRepository: CreateOrderRepository) {}

    async execute(orderData: CreateOrder.Params): Promise<void> {
        const orderEntity = new Order(orderData);
        await this.createOrderRepository.create(orderEntity);
    }
}
