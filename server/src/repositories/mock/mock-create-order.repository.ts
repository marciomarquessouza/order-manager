import { CreateOrderRepository } from '@repositories/create-order.repository';
import { CreateOrder } from '@usecases/create-order/create-order.protocols';

export class CreateOrderRepositorySpy implements CreateOrderRepository {
    public params: CreateOrderRepository.Params;

    async create(data: CreateOrder.Params): Promise<void> {
        this.params = data;
    }
}
