import { CheckEnvironment } from '../check-environment.protocol';

export class CheckEnvironmentSpy implements CheckEnvironment {
    result: CheckEnvironment.Result = {
        envName: 'DEV',
    };

    check(): CheckEnvironment.Result {
        return this.result;
    }
}
