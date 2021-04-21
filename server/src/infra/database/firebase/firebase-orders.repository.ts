import { CreateOrderRepository, LoadOrdersRepository, UpdateOrderRepository } from '@/repositories';
import { LoadOrders, UpdateOrder } from '@/usecases';
import { FirebaseHelper } from './firebase-helper';

export class FirebaseOrderRepository
    implements CreateOrderRepository, LoadOrdersRepository, UpdateOrderRepository {
    async create(data: CreateOrderRepository.Params): Promise<void> {
        const uid = FirebaseHelper.getUid();
        const orderCollection = FirebaseHelper.getCollection('orders');
        await orderCollection.doc(uid).set({ uid, ...data });
    }

    async loadAll(): Promise<LoadOrders.Result> {
        throw new Error('Method not implemented.');
    }

    async update(data: UpdateOrder.Params, id: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}
