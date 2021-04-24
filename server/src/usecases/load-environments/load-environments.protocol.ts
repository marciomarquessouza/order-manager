export namespace LoadEnvironments {
    export type Result = {
        [name: string]: string | number | boolean;
    };
}

export interface LoadEnvironments {
    execute(): LoadEnvironments.Result;
}
