import faker from 'faker';
import { AuthByToken } from '../auth-by-token.protocols';

export const mockAuthByTokenParams = (): AuthByToken.Params => ({
    token: 'token_id',
});

export class AuthByTokenSpy implements AuthByToken {
    params: AuthByToken.Params;
    result: AuthByToken.Result = { userId: faker.datatype.uuid() };

    async execute(data: AuthByToken.Params): Promise<AuthByToken.Result> {
        this.params = data;
        return this.result;
    }
}
