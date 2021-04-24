import { AuthByToken } from '@usecases/auth-by-token/auth-by-token.protocols';

export namespace AuthByTokenRepository {
    export type Params = AuthByToken.Params;
    export type Result = AuthByToken.Result;
}

export interface AuthByTokenRepository {
    auth(data: AuthByToken.Params): Promise<AuthByToken.Result>;
}
