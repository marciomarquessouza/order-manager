import { LoadOrdersRepository } from '@/repositories/load-order.repository';
import { LoadOrders } from './load-orders.protocols';

export class LoadOrdersUseCase implements LoadOrders {
    constructor(private readonly loadOrdersRepository: LoadOrdersRepository) {}

    async execute(): Promise<LoadOrders.Result> {
        const orders = await this.loadOrdersRepository.loadAll();
        return orders;
    }
}
