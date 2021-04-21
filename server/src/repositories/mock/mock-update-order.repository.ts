import { UpdateOrderRepository } from '../update-order.repository';

export class UpdateOrderRepositorySpy implements UpdateOrderRepository {
    id: string;
    params: UpdateOrderRepository.Params;

    async update(data: UpdateOrderRepository.Params, id: string): Promise<void> {
        this.id = id;
        this.params = data;
    }
}
