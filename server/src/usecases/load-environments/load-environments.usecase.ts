import { LoadEnvironmentsRepository } from '@/data/load-environments.repository';
import { LoadEnvironments } from './load-environments.protocol';

export class LoadEnvironmentsUseCase implements LoadEnvironments {
    constructor(private readonly loadEnvironmentsRepository: LoadEnvironmentsRepository) {}

    execute(): LoadEnvironments.Result {
        return this.loadEnvironmentsRepository.list();
    }
}
