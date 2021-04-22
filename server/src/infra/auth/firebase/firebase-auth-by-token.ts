import { AuthByToken } from '@/presentation/auth/auth-by-token.protocol';
import { FirebaseHelper } from './firebase-helper';

export class FirebaseAuthByToken implements AuthByToken {
    async auth(params: AuthByToken.params): Promise<AuthByToken.result> {
        const decodedToken = await FirebaseHelper.verifyIdToken(params.token);
        return { userId: decodedToken.uid };
    }
}
