import { UpdateOrder } from '@/usecases';
import { badRequest, HttpResponse, ok, serverError } from '../helpers';
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

    async handle(request: UpdateOrderController.Request): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request);
            if (error) {
                return badRequest(error);
            }
            await this.updateOrder.execute(request);
            return ok();
        } catch (error) {
            return serverError(error);
        }
    }
}
