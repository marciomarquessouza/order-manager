import { CheckEnvironmentRepository } from '@/data/check-environment.repository';
import { LoadEnvironmentsRepository } from '@/data/load-environments.repository';
import { config, DotenvConfigOutput } from 'dotenv';

export class DotEnvEnvironment implements CheckEnvironmentRepository, LoadEnvironmentsRepository {
    private configOutput: DotenvConfigOutput;

    constructor() {
        this.configOutput = config();
    }

    list(): LoadEnvironmentsRepository.Result {
        return this.configOutput.parsed;
    }

    check(): CheckEnvironmentRepository.Result {
        return {
            envName: process.env.APP_ENV || 'DEV',
        };
    }
}
