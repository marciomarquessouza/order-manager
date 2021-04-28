import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import { Logo } from '../../components/Logo';

export function PageLoading() {
    return (
        <main className="h-screen flex flex-col justify-center items-center bg-white">
            <Logo variant="standard" onClick={() => undefined} />
            <section className="flex flex-row justify-center items-center m-4">
                <CircularProgress className="mx-4" />
                <Typography variant="h6" gutterBottom color="secondary">
                    Loading
                </Typography>
            </section>
        </main>
    );
}
