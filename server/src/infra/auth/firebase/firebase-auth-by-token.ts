import { AuthByTokenRepository } from '@/data/auth-by-token.repository';
import { FirebaseAuthHelper } from './firebase-helper';

export class FirebaseAuthByToken implements AuthByTokenRepository {
    async auth(params: AuthByTokenRepository.Params): Promise<AuthByTokenRepository.Result> {
        const decodedToken = await FirebaseAuthHelper.verifyIdToken(params.token);
        return { userId: decodedToken.uid };
    }
}
