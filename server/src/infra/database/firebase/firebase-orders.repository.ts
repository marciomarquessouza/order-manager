import { Order } from '@entities/Order';
import { CreateOrderRepository, LoadOrdersRepository, UpdateOrderRepository } from '@/data';
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
        const orderCollection = FirebaseHelper.getCollection('orders');
        const result = await orderCollection.get();
        if (result.empty) {
            return [];
        }
        const orders = result.docs.map((doc) => doc.data() as Order);
        return orders;
    }

    async update(data: UpdateOrder.Params): Promise<void> {
        const orderCollection = FirebaseHelper.getCollection('orders');
        await orderCollection.doc(data.uid).update(data);
    }
}
