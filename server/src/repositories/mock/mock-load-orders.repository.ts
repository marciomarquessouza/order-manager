import { mockOrders } from '@/entities/mocks/mock-order';
import { LoadOrdersRepository } from '../load-order.repository';

export class LoadOrdersRepositorySpy implements LoadOrdersRepository {
    result: LoadOrdersRepository.Result = mockOrders();

    async loadAll(): Promise<LoadOrdersRepository.Result> {
        return this.result;
    }
}
