import { Order } from '@entities/Order';

export namespace CreateOrder {
    export type Params = Omit<Order, 'id'>;
}

export interface CreateOrder {
    execute(order: CreateOrder.Params): Promise<void>;
}
