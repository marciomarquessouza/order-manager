import { CheckEnvironment } from '@/data/check-environment.protocol';
import { LoadEnvironments } from '@/data/load-environments.protocol';
import { config, DotenvConfigOutput } from 'dotenv';

export class DotEnvEnvironment implements CheckEnvironment, LoadEnvironments {
    private configOutput: DotenvConfigOutput;

    constructor() {
        this.configOutput = config();
    }

    list(): LoadEnvironments.Result {
        return this.configOutput.parsed;
    }

    check(): CheckEnvironment.Result {
        return {
            envName: process.env.APP_ENV || 'DEV',
        };
    }
}
