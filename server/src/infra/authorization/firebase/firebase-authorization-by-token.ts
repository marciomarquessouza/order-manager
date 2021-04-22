import { AuthorizationByToken } from '@/presentation/authorization/authorization-by-token.protocol';
import { FirebaseHelper } from './firebase-helper';

export class FirebaseAuthorizationByToken implements AuthorizationByToken {
    async authorization(params: AuthorizationByToken.params): Promise<AuthorizationByToken.result> {
        const decodedToken = await FirebaseHelper.verifyIdToken(params.token);
        return { userId: decodedToken.uid };
    }
}
