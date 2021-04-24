import { DotEnvEnvironment } from '@/infra/env';
import { LoadEnvironments } from '@/usecases/load-environments/load-environments.protocol';
import { LoadEnvironmentsUseCase } from '@/usecases/load-environments/load-environments.usecase';

export const makeLoadEnvironments = (): LoadEnvironments => {
    const loadEnvironmentsRepository = new DotEnvEnvironment();
    const loadEnvironmentsUseCase = new LoadEnvironmentsUseCase(loadEnvironmentsRepository);
    return loadEnvironmentsUseCase;
};
