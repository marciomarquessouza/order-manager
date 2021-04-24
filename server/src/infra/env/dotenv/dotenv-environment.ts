import { CheckEnvironment } from '@/data/check-environment.protocol';
import { LoadEnvironmentsRepository } from '@/data/load-environments.repository';
import { config, DotenvConfigOutput } from 'dotenv';

export class DotEnvEnvironment implements CheckEnvironment, LoadEnvironmentsRepository {
    private configOutput: DotenvConfigOutput;

    constructor() {
        this.configOutput = config();
    }

    list(): LoadEnvironmentsRepository.Result {
        return this.configOutput.parsed;
    }

    check(): CheckEnvironment.Result {
        return {
            envName: process.env.APP_ENV || 'DEV',
        };
    }
}
