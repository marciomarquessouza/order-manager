import { LoadEnvironments } from '@/usecases/load-environments/load-environments.protocol';

export namespace LoadEnvironmentsRepository {
    export type Result = LoadEnvironments.Result;
}

export interface LoadEnvironmentsRepository {
    list(): LoadEnvironmentsRepository.Result;
}
