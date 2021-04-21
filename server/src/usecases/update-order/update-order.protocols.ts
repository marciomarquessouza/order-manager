import { Order } from '@entities/Order';

export namespace UpdateOrder {
    export type Params = {
        title?: string;
        bookingDate?: Date;
    };
    export type Result = Order;
}

export interface UpdateOrder {
    execute(data: UpdateOrder.Params, id: string): Promise<UpdateOrder.Result>;
}
