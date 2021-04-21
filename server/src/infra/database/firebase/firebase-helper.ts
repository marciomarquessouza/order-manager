import firebase, { ServiceAccount } from 'firebase-admin';

export const FirebaseHelper = {
    initialize(serviceAccount: ServiceAccount, databaseURL: string) {
        firebase.initializeApp({
            credential: firebase.credential.cert(serviceAccount),
            databaseURL,
        });
    },
    getCollection(name: string) {
        return firebase.firestore().collection(name);
    },
};
