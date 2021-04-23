import { FirebaseLoadDevToken } from '../firebase-load-devtoken';

jest.mock('../firebase-helper', () => ({
    FirebaseAuthHelper: {
        getDevToken: jest.fn().mockResolvedValue('DEV_TOKEN'),
    },
}));

const makeSut = (): FirebaseLoadDevToken => {
    return new FirebaseLoadDevToken();
};

describe('#Firebase Auth | Load DevToken', () => {
    describe('load()', () => {
        describe('when the dev token is requested', () => {
            it('calls the getDevToken method from firebase properly', async () => {
                const sut = makeSut();
                const userId = 'USER_ID';
                const response = await sut.load({ userId });
                expect(response.devToken).toBe('DEV_TOKEN');
            });
        });
    });
});
