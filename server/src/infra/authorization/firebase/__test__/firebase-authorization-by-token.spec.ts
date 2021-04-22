import { FirebaseAuthorizationByToken } from '../firebase-authorization-by-token';

jest.mock('../firebase-helper', () => ({
    FirebaseHelper: {
        verifyIdToken: jest.fn().mockResolvedValue({
            uid: 'USER_ID',
        }),
    },
}));

const makeSut = (): FirebaseAuthorizationByToken => {
    return new FirebaseAuthorizationByToken();
};

describe('#Firebase Authorization | Authorization By Token', () => {
    describe('authorization()', () => {
        describe('when the middleware ask to check an access token', () => {
            it('calls the verifyIdToken command from firebase properly', async () => {
                const sut = makeSut();
                const token = 'MY_TOKEN';
                const response = await sut.authorization({ token });
                expect(response.userId).toBe('USER_ID');
            });
        });
    });
});
