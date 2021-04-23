import { UpdateOrderRepository } from '@/data/update-order.repository';
import { UpdateOrder } from './update-order.protocols';

export class UpdateOrderUseCase implements UpdateOrder {
    constructor(private readonly updateOrderRepository: UpdateOrderRepository) {}

    async execute(data: UpdateOrder.Params): Promise<void> {
        await this.updateOrderRepository.update(data);
    }
}
