import { LoadOrders } from '@/usecases';
import { HttpResponse, noContent, ok } from '../helpers';
import { Controller } from './controller-protocol';

export class LoadOrdersController implements Controller {
    constructor(private readonly loadOrders: LoadOrders) {}

    async handle(): Promise<HttpResponse> {
        try {
            const orders = await this.loadOrders.execute();
            return orders.length ? ok(orders) : noContent();
        } catch (error) {}
    }
}
