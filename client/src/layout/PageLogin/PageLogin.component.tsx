import React from 'react';
import { Paper, Card, Typography } from '@material-ui/core';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { TextInput } from '../../components/TextInput';
import { IPageLoginProps } from './PageLogin.props';

export function PageLogin({
    email,
    onEmailChange,
    password,
    onPasswordChange,
    onSubmit,
    isLoading = false,
}: IPageLoginProps) {
    return (
        <Paper elevation={3} className="max-w-md">
            <Card>
                <main className="flex flex-col items-center py-12">
                    <header className="mt-12 mb-8">
                        <Logo variant="standard" onClick={() => undefined} />
                    </header>
                    <div className="mt-3 mb-6">
                        <Typography variant="subtitle1" color="secondary" align="center">
                            Login to your account
                        </Typography>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="h-36 flex flex-wrap content-between mx-12 mt-4 mb-8">
                            <TextInput
                                autoFocus
                                type="email"
                                variant="outlined"
                                placeholder="E-mail"
                                label="E-mail"
                                value={email}
                                onChange={onEmailChange}
                                fullWidth
                            />
                            <TextInput
                                type="password"
                                variant="outlined"
                                placeholder="Password"
                                label="Password"
                                value={password}
                                onChange={onPasswordChange}
                                fullWidth
                            />
                        </div>
                        <footer className="mx-12 my-14">
                            <Button
                                variant="contained"
                                onClick={onSubmit}
                                fullWidth
                                isLoading={isLoading}
                                type="submit"
                            >
                                Login
                            </Button>
                        </footer>
                    </form>
                </main>
            </Card>
        </Paper>
    );
}
