import { UpdateOrderRepository } from '../update-order.repository';

export class UpdateOrderRepositorySpy implements UpdateOrderRepository {
    params: UpdateOrderRepository.Params;

    async update(data: UpdateOrderRepository.Params): Promise<void> {
        this.params = data;
    }
}
