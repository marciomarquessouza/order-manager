export namespace LoadDevToken {
    export type Params = {
        userId: string;
    };

    export type Result = {
        devToken: string;
    };
}

export interface LoadDevToken {
    execute(data: LoadDevToken.Params): Promise<LoadDevToken.Result>;
}
