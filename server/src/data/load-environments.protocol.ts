export namespace LoadEnvironments {
    export type Result = {
        [name: string]: string;
    };
}

export interface LoadEnvironments {
    list(): LoadEnvironments.Result;
}
