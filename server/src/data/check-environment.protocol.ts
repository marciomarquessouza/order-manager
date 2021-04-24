export namespace CheckEnvironment {
    export type Result = {
        envName: string;
    };
}

export interface CheckEnvironment {
    check(): CheckEnvironment.Result;
}
