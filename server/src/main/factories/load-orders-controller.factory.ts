import { FirebaseOrderRepository } from '@/infra/database';
import { Controller } from '@/presentation/controllers/controller-protocol';
import { LoadOrdersController } from '@/presentation/controllers/load-orders.controller';
import { LoadOrdersUseCase } from '@/usecases';

export const makeLoadOrdersController = (): Controller => {
    const loadOrdersRepository = new FirebaseOrderRepository();
    const loadOrdersUseCase = new LoadOrdersUseCase(loadOrdersRepository);
    const loadOrdersController = new LoadOrdersController(loadOrdersUseCase);
    return loadOrdersController;
};
