import { UpdateOrder } from '@usecases/update-order/update-order.protocols';

export namespace UpdateOrderRepository {
    export type Params = UpdateOrder.Params;
}

export interface UpdateOrderRepository {
    update(data: UpdateOrderRepository.Params): Promise<void>;
}
