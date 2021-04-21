import { CreateOrder } from '@usecases/create-order/create-order.interface';

export namespace CreateOrderRepository {
    export type Params = CreateOrder.Params;
    export type Result = CreateOrder.Result;
}

export interface CreateOrderRepository {
    create(data: CreateOrderRepository.Params): Promise<CreateOrderRepository.Result>;
}
