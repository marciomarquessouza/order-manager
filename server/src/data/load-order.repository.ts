import { LoadOrders } from '@/usecases/load-orders/load-orders.protocols';

export namespace LoadOrdersRepository {
    export type Result = LoadOrders.Result;
}

export interface LoadOrdersRepository {
    loadAll(): Promise<LoadOrdersRepository.Result>;
}
