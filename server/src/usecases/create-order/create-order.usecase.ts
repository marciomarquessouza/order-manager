import { CreateOrderRepository } from '@repositories/create-order.repository';
import { CreateOrder } from './create-order.interface';

export class CreateOrderUseCase implements CreateOrder {
    constructor(private readonly createOrderRepository: CreateOrderRepository) {}

    async execute(orderData: CreateOrder.Params): Promise<CreateOrder.Result> {
        const order = await this.createOrderRepository.create(orderData);
        return order;
    }
}
