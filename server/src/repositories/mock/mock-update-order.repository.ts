import { UpdateOrderRepository } from '../update-order.repository';

export class UpdateOrderRepositorySpy implements UpdateOrderRepository {
    id: string;
    params: UpdateOrderRepository.Params;
    result: UpdateOrderRepository.Result = true;

    async update(
        data: UpdateOrderRepository.Params,
        id: string,
    ): Promise<UpdateOrderRepository.Result> {
        this.id = id;
        this.params = data;
        return this.result;
    }
}
