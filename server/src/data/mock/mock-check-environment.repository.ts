import { CheckEnvironmentRepository } from '../check-environment.repository';

export class CheckEnvironmentSpy implements CheckEnvironmentRepository {
    result: CheckEnvironmentRepository.Result = {
        envName: 'DEV',
    };

    check(): CheckEnvironmentRepository.Result {
        return this.result;
    }
}
