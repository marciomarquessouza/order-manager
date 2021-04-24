import { LoadDevTokenRepository } from '@/data/load-devtoken.repository';
import { FirebaseAuthHelper } from './firebase-helper';

export class FirebaseLoadDevToken implements LoadDevTokenRepository {
    async load(params: LoadDevTokenRepository.Params): Promise<LoadDevTokenRepository.Result> {
        return await FirebaseAuthHelper.getDevToken(params.userId);
    }
}
