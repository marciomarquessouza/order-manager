import firebase from 'firebase-admin';
import fetch from 'node-fetch';

export const FirebaseAuthHelper = {
    async verifyIdToken(token: string) {
        return await firebase.auth().verifyIdToken(token);
    },
    async getTokenId(uid: string): Promise<string> {
        try {
            const customToken = await firebase.auth().createCustomToken(uid);
            const response = await fetch(
                `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=AIzaSyDcMG3Wr5rB8n8hcGvh7kbFisvSx_k4uxk`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        token: customToken,
                        returnSecureToken: true,
                    }),
                },
            );
            const content = await response.json();
            return content.idToken;
        } catch (error) {
            console.log('content', error.message);
            return `No token today ${error.message}`;
        }
    },
};
