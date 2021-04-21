import { UpdateOrderRepository } from '@/repositories/update-order.repository';
import { UpdateOrder } from './update-order.protocols';

export class UpdateOrderUseCase implements UpdateOrder {
    constructor(private readonly updateOrderRepository: UpdateOrderRepository) {}

    async execute(data: UpdateOrder.Params, id: string): Promise<UpdateOrder.Result> {
        const hasUpdated = await this.updateOrderRepository.update(data, id);
        return hasUpdated;
    }
}
