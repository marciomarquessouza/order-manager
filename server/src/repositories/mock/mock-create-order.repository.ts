import { CreateOrderRepository } from '@repositories/create-order.repository';

export class CreateOrderRepositorySpy implements CreateOrderRepository {
    public params: CreateOrderRepository.Params;

    async create(data: CreateOrderRepository.Params): Promise<void> {
        this.params = data;
    }
}
