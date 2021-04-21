import { CreateOrderRepository, LoadOrdersRepository, UpdateOrderRepository } from '@/repositories';
import { CreateOrder, LoadOrders, UpdateOrder } from '@/usecases';
import { FirebaseHelper } from './firebase-helper';

export class FirebaseOrderRepository
    implements CreateOrderRepository, LoadOrdersRepository, UpdateOrderRepository {
    async create(data: CreateOrder.Params): Promise<void> {
        const orderCollection = FirebaseHelper.getCollection('orders');
        await orderCollection.doc().set(data);
    }

    async loadAll(): Promise<LoadOrders.Result> {
        throw new Error('Method not implemented.');
    }

    async update(data: UpdateOrder.Params, id: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}
