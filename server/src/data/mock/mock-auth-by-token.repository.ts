import { AuthByToken } from '@/usecases/auth-by-token/auth-by-token.protocols';
import { AuthByTokenRepository } from '../auth-by-token.repository';
import faker from 'faker';

export class AuthByTokenRepositorySpy implements AuthByTokenRepository {
    params: AuthByTokenRepository.Params;
    result: AuthByTokenRepository.Result = {
        userId: faker.datatype.uuid(),
    };

    async auth(data: AuthByToken.Params): Promise<AuthByToken.Result> {
        this.params = data;
        return this.result;
    }
}
