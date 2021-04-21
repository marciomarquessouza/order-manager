import { Order } from '@/entities/Order';

export namespace LoadOrders {
    export type Result = Order[];
}

export interface LoadOrders {
    execute(): Promise<LoadOrders.Result>;
}
