import { CreateOrder } from '@usecases/create-order/create-order.protocols';

export namespace CreateOrderRepository {
    export type Params = CreateOrder.Params;
}

export interface CreateOrderRepository {
    create(data: CreateOrderRepository.Params): Promise<void>;
}
