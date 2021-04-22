import { AuthByToken } from '../auth-by-token.protocol';
import faker from 'faker';

export class AuthByTokenSpy implements AuthByToken {
    params: AuthByToken.params;
    result: AuthByToken.result = {
        userId: faker.datatype.uuid(),
    };

    async auth(params: AuthByToken.params): Promise<AuthByToken.result> {
        this.params = params;
        return this.result;
    }
}
