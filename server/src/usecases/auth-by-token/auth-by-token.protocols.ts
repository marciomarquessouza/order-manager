export namespace AuthByToken {
    export type Params = {
        token: string;
    };
    export type Result = {
        userId: string;
    };
}

export interface AuthByToken {
    execute(data: AuthByToken.Params): Promise<AuthByToken.Result>;
}
