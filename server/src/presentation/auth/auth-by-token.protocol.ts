export namespace AuthByToken {
    export type params = {
        token: string;
    };
    export type result = {
        userId: string;
    };
}

export interface AuthByToken {
    auth(params: AuthByToken.params): Promise<AuthByToken.result>;
}
