import { IUser } from '../entities/IUser';
import { firebaseApp } from './firebase.service';

export namespace SignProtocol {
    export type params = IUser;
    export type result = {
        email: string;
        name: string;
    };
}

export async function signWithEmailAndPassword(props: SignProtocol.params): Promise<void> {
    try {
        await firebaseApp.auth().signInWithEmailAndPassword(props.email, props.password);
    } catch (error) {
        throw new Error(error);
    }
}

export const signOut = () => {
    firebaseApp.auth().signOut();
};
