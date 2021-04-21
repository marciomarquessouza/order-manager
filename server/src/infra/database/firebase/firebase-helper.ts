import firebase, { ServiceAccount } from 'firebase-admin';
import { uuid } from 'uuidv4';

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
    getUid() {
        return uuid();
    },
};
