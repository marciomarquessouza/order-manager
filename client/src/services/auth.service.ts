import { IUser } from '../entities/IUser';
import { firebaseApp } from './firebase.service';

export namespace SignProtocol {
    export type params = IUser;
    export type result = {
        token: string;
        email: string;
        name: string;
    };
}

export async function signWithEmailAndPassword(
    props: SignProtocol.params,
): Promise<SignProtocol.result> {
    try {
        const { user } = await firebaseApp
            .auth()
            .signInWithEmailAndPassword(props.email, props.password);

        if (user) {
            const token = await user.getIdToken();
            const email = user.email || '';
            const name = user.displayName || 'User';
            return { token, email, name };
        }

        throw new Error('SignIn Error');
    } catch (error) {
        throw new Error(error);
    }
}

export async function getFirebaseUser(): Promise<SignProtocol.result> {
    try {
        const user = firebaseApp.auth().currentUser;
        if (user) {
            const token = await user.getIdToken();
            const email = user.email || '';
            const name = user.displayName || 'user';
            return { token, email, name };
        }
        throw new Error('SignIn Error');
    } catch (error) {
        throw new Error(error.message);
    }
}

export const signOut = () => {
    firebaseApp.auth().signOut();
};
