import { UpdateOrderRepository } from '../update-order.repository';
import { UpdateOrder } from '@/usecases/update-order/update-order.protocols';

export class UpdateOrderRepositorySpy implements UpdateOrderRepository {
    id: string;
    params: UpdateOrderRepository.Params;
    result: UpdateOrderRepository.Result = true;

    async update(data: UpdateOrder.Params, id: string): Promise<UpdateOrder.Result> {
        this.id = id;
        this.params = data;
        return this.result;
    }
}
