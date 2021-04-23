import { CreateOrderRepository } from '@/data/create-order.repository';
import { CreateOrder } from './create-order.protocols';

export class CreateOrderUseCase implements CreateOrder {
    constructor(private readonly createOrderRepository: CreateOrderRepository) {}

    async execute(orderData: CreateOrder.Params): Promise<void> {
        await this.createOrderRepository.create(orderData);
    }
}
