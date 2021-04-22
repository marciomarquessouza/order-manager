import { UpdateOrder } from '@/usecases';
import { HttpResponse } from '../helpers';
import { Validation } from '../validation/validation.protocol';
import { Controller } from './controller-protocol';

export namespace UpdateOrderController {
    export type Request = {
        uid: string;
        title?: string;
        bookingDate?: number;
    };
}

export class UpdateOrderController implements Controller<UpdateOrderController.Request> {
    constructor(
        private readonly updateOrder: UpdateOrder,
        private readonly validation: Validation,
    ) {}

    handle(request: UpdateOrderController.Request): Promise<HttpResponse> {
        try {
            this.validation.validate(request);
        } catch (error) {}
    }
}
