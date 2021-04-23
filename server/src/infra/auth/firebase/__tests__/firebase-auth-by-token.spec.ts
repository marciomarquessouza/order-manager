import { FirebaseAuthByToken } from '../firebase-auth-by-token';

jest.mock('../firebase-helper', () => ({
    FirebaseAuthHelper: {
        verifyIdToken: jest.fn().mockResolvedValue({
            uid: 'USER_ID',
        }),
    },
}));

const makeSut = (): FirebaseAuthByToken => {
    return new FirebaseAuthByToken();
};

describe('#Firebase Author | Auth By Token', () => {
    describe('auth()', () => {
        describe('when the middleware ask to check an access token', () => {
            it('calls the verifyIdToken command from firebase properly', async () => {
                const sut = makeSut();
                const token = 'MY_TOKEN';
                const response = await sut.auth({ token });
                expect(response.userId).toBe('USER_ID');
            });
        });
    });
});
