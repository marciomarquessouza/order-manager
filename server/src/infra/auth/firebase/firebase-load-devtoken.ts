import { LoadDevTokenRepository } from '@/data/load-devtoken.repository';
import { LoadDevToken } from '@/usecases/load-devtoken/load-dev-token.protocols';
import { FirebaseAuthHelper } from './firebase-helper';

export class FirebaseLoadDevToken implements LoadDevTokenRepository {
    async load(params: LoadDevToken.Params): Promise<LoadDevTokenRepository.Result> {
        return await FirebaseAuthHelper.getDevToken(params.userId);
    }
}
