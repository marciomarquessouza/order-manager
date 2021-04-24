import { LoadEnvironments } from '@/usecases/load-environments/load-environments.protocol';
import { LoadEnvironmentsRepository } from '../load-environments.repository';

export class LoadEnvironmentsSpy implements LoadEnvironmentsRepository {
    result: LoadEnvironments.Result = {
        PORT: 5000,
        APP_ENV: 'DEV',
    };

    list(): LoadEnvironments.Result {
        return this.result;
    }
}
