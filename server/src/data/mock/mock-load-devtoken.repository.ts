import { LoadDevToken } from '@/usecases/load-devtoken/load-dev-token.protocols';
import { LoadDevTokenRepository } from '../load-devtoken.repository';

export class LoadDevTokenRepositorySpy implements LoadDevTokenRepository {
    params: LoadDevTokenRepository.Params;
    result: LoadDevTokenRepository.Result = { devToken: 'dev-token' };

    async load(params: LoadDevToken.Params): Promise<LoadDevToken.Result> {
        this.params = params;
        return this.result;
    }
}
