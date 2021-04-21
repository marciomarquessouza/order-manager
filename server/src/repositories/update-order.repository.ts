import { UpdateOrder } from '@usecases/update-order/update-order.protocols';

export namespace UpdateOrderRepository {
    export type Params = UpdateOrder.Params;
    export type Result = UpdateOrder.Result;
}

export interface UpdateOrderRepository {
    update(data: UpdateOrderRepository.Params, id: string): Promise<UpdateOrderRepository.Result>;
}
