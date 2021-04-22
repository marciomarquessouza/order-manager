export namespace AuthorizationByToken {
    export type params = {
        token: string;
    };
    export type result = {
        userId: string;
    };
}

export interface AuthorizationByToken {
    authorization(params: AuthorizationByToken.params): Promise<AuthorizationByToken.result>;
}
