import { AuthByToken } from '@/presentation/auth/auth-by-token.protocol';

export namespace AuthByTokenRepository {
    export type Params = AuthByToken.Params;
    export type Result = AuthByToken.Result;
}

export interface AuthByTokenRepository {
    auth(data: AuthByToken.Params): AuthByToken.Result;
}
