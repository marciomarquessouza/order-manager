import { Order } from '@/entities/Order';

export namespace CreateOrderRepository {
    export type Params = Order;
}

export interface CreateOrderRepository {
    create(data: CreateOrderRepository.Params): Promise<void>;
}
