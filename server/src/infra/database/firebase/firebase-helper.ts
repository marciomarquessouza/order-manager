import firebase, { ServiceAccount } from 'firebase-admin';
import { uuid } from 'uuidv4';

export const FirebaseHelper = {
    initialize(serviceAccount: ServiceAccount) {
        firebase.initializeApp({
            credential: firebase.credential.cert(serviceAccount),
        });
    },
    getCollection(name: string) {
        return firebase.firestore().collection(name);
    },
    getUid() {
        return uuid();
    },
};
