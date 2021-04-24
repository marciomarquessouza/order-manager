import { AuthByTokenRepository } from '@/data/auth-by-token.repository';
import { AuthByToken } from '@/usecases/auth-by-token/auth-by-token.protocols';
import { FirebaseAuthHelper } from './firebase-helper';

export class FirebaseAuthByToken implements AuthByTokenRepository {
    async auth(data: AuthByToken.Params): Promise<AuthByToken.Result> {
        const decodedToken = await FirebaseAuthHelper.verifyIdToken(data.token);
        return { userId: decodedToken.uid };
    }
}
