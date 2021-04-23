import { env } from '@/main/config';
import firebase from 'firebase-admin';
import fetch from 'node-fetch';

export const FirebaseAuthHelper = {
    async verifyIdToken(token: string) {
        return await firebase.auth().verifyIdToken(token);
    },
    async getDevToken(uid: string): Promise<string> {
        const customToken = await firebase.auth().createCustomToken(uid);
        const response = await fetch(`${FIREBASE_TOKEN_ID_API}?key=${env.api_key}`, {
            method: 'POST',
            body: JSON.stringify({
                token: customToken,
                returnSecureToken: true,
            }),
        });
        const content = await response.json();
        return content.idToken;
    },
};
