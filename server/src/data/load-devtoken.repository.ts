import { LoadDevToken } from '@/usecases/load-devtoken/load-dev-token.protocols';

export namespace LoadDevTokenRepository {
    export type Params = LoadDevToken.Params;
    export type Result = string;
}

export interface LoadDevTokenRepository {
    load(params: LoadDevTokenRepository.Params): Promise<LoadDevTokenRepository.Result>;
}
