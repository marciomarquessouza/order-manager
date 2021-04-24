export namespace CheckEnvironmentRepository {
    export type Result = {
        envName: string;
    };
}

export interface CheckEnvironmentRepository {
    check(): CheckEnvironmentRepository.Result;
}
