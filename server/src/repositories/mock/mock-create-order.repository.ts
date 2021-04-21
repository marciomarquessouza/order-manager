import { mockOrder } from '@/entities/mocks/mock-order';
import { CreateOrderRepository } from '@repositories/create-order.repository';
import { CreateOrder } from '@usecases/create-order/create-order.protocols';

export class CreateOrderRepositorySpy implements CreateOrderRepository {
    public params: CreateOrderRepository.Params;
    result: CreateOrder.Result = mockOrder();

    async create(data: CreateOrder.Params): Promise<CreateOrder.Result> {
        this.params = data;
        return this.result;
    }
}
