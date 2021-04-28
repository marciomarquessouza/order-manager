import React, { useState } from 'react';
import { Avatar } from '../../components/Avatar';
import { Logo } from '../../components/Logo';
import { Dialog } from '../../components/Dialog';
import { Button } from '../../components/Button';
import { IPageNavProps } from './PageNav.props';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';

export function PageNav({ name, email, onClickAvatar, onClickLogo }: IPageNavProps) {
    const [open, setOpen] = useState(false);

    const handleOnClose = (status: boolean) => {
        setOpen(status);
    };

    return (
        <>
            <Dialog title="User Profile" open={open} onClose={() => handleOnClose(false)}>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {email}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={onClickAvatar}>Logout</Button>
                    </CardActions>
                </Card>
            </Dialog>
            <header className="flex flex-row justify-between items-center m-6">
                <Logo variant="row" onClick={onClickLogo} />
                <Avatar onClick={() => handleOnClose(true)} name={name} email={email} />
            </header>
        </>
    );
}
