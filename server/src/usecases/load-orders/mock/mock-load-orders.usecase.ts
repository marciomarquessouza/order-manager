import { mockOrders } from '@/entities/mocks/mock-order';
import { LoadOrders } from '../load-orders.protocols';

export class LoadOrdersSpy implements LoadOrders {
    result: LoadOrders.Result = mockOrders();

    async execute(): Promise<LoadOrders.Result> {
        return this.result;
    }
}
