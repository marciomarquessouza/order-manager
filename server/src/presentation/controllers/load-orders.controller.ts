import { LoadOrders } from '@/usecases';
import { HttpResponse } from '../helpers';
import { Controller } from './controller-protocol';

export class LoadOrdersController implements Controller {
    constructor(private readonly loadOrders: LoadOrders) {}

    async handle(): Promise<HttpResponse> {
        try {
            await this.loadOrders.execute();
        } catch (error) {}
    }
}
