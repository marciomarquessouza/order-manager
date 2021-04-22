import { Order } from '@/entities/Order';
import { CreateOrder } from '@/usecases';
import { badRequest, created, HttpResponse, serverError } from '../helpers';
import { Validation } from '../validation/validation.protocol';
import { Controller } from './controller-protocol';

export namespace CreateOrderController {
    export type Request = Omit<Order, 'uid'>;
}

export class CreateOrderController implements Controller<CreateOrderController.Request> {
    constructor(
        private readonly createOrder: CreateOrder,
        private readonly validation: Validation,
    ) {}

    async handle(request: CreateOrderController.Request): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request);
            if (error) {
                return badRequest(error);
            }
            await this.createOrder.execute(request);
            return created();
        } catch (error) {
            return serverError(error);
        }
    }
}
