import React from 'react';
import { PageLogin } from '../../layout/PageLogin';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { signIn } from './SignIn.slice';
import { openAlert } from '../alerts/Alert.slice';

export function SignIn() {
    const { appState } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSignIn = () => {
        if (!email || !password) {
            return dispatch(
                openAlert({
                    message: 'The e-mail and password fields are mandatory',
                    severity: 'error',
                }),
            );
        }
        dispatch(signIn({ email, password }));
    };

    return (
        <main className="h-screen flex justify-center items-center bg-gray-200">
            <PageLogin
                email={email}
                onEmailChange={setEmail}
                password={password}
                onPasswordChange={setPassword}
                onSubmit={handleSignIn}
                isLoading={appState === 'loading'}
            />
        </main>
    );
}
