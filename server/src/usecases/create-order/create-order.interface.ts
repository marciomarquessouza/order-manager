import { Order } from '@entities/Order';

export namespace CreateOrder {
    export type Params = Omit<Order, 'id'>;

    export type Result = Order;
}

export interface CreateOrder {
    execute(order: CreateOrder.Params): Promise<CreateOrder.Result>;
}
