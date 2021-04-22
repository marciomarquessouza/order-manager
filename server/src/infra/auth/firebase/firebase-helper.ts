import firebase from 'firebase-admin';

export const FirebaseHelper = {
    async verifyIdToken(token: string) {
        return await firebase.auth().verifyIdToken(token);
    },
};
