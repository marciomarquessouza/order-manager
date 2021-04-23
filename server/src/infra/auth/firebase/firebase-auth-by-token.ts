import { AuthByToken } from '@/presentation/auth/auth-by-token.protocol';
import { FirebaseAuthHelper } from './firebase-helper';

export class FirebaseAuthByToken implements AuthByToken {
    async auth(params: AuthByToken.params): Promise<AuthByToken.result> {
        const decodedToken = await FirebaseAuthHelper.verifyIdToken(params.token);
        return { userId: decodedToken.uid };
    }
}
