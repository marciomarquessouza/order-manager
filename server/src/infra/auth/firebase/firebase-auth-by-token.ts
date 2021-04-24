import { AuthByTokenRepository } from '@/data/auth-by-token.repository';
import { FirebaseAuthHelper } from './firebase-helper';

export class FirebaseAuthByToken implements AuthByTokenRepository {
    async auth(data: AuthByTokenRepository.Params): Promise<AuthByTokenRepository.Result> {
        const decodedToken = await FirebaseAuthHelper.verifyIdToken(data.token);
        return { userId: decodedToken.uid };
    }
}
