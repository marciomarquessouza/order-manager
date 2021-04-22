import { FirebaseOrderRepository } from '@/infra/database';
import { UpdateOrderValidatorAdapter } from '@/infra/validators/validate/update-order-validator.adapter';
import { Controller } from '@/presentation/controllers/controller-protocol';
import { UpdateOrderController } from '@/presentation/controllers/update-order.controller';
import { UpdateOrderUseCase } from '@/usecases';

export const makeUpdateOrderController = (): Controller => {
    const updateOrderRepository = new FirebaseOrderRepository();
    const updateOrderUseCase = new UpdateOrderUseCase(updateOrderRepository);
    const updateOrderValidator = new UpdateOrderValidatorAdapter();
    const updateOrderController = new UpdateOrderController(
        updateOrderUseCase,
        updateOrderValidator,
    );
    return updateOrderController;
};
