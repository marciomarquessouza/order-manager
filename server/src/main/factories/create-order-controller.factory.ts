import { FirebaseOrderRepository } from '@/infra/database';
import { CreateOrderValidatorAdapter } from '@/infra/validators';
import { Controller } from '@/presentation/controllers/controller-protocol';
import { CreateOrderController } from '@/presentation/controllers/create-order.controller';
import { CreateOrderUseCase } from '@/usecases';

export const makeCreateOrderController = (): Controller => {
    const createOrderRepository = new FirebaseOrderRepository();
    const createOrderUseCase = new CreateOrderUseCase(createOrderRepository);
    const createOrderValidator = new CreateOrderValidatorAdapter();
    const createOrderController = new CreateOrderController(
        createOrderUseCase,
        createOrderValidator,
    );
    return createOrderController;
};
