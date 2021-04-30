import React, { useState } from 'react';
import { Avatar } from '../../components/Avatar';
import { Logo } from '../../components/Logo';
import { Dialog } from '../../components/Dialog';
import { Button } from '../../components/Button';
import { IPageNavProps } from './PageNav.props';
import { Avatar as MaterialAvatar } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import { useStyles } from './PageNav.styles';

export function PageNav({ name, email, onClickAvatar, onClickLogo }: IPageNavProps) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOnClose = (status: boolean) => {
        setOpen(status);
    };

    return (
        <>
            <Dialog title="User Profile" open={open} onClose={() => handleOnClose(false)}>
                <section className="flex flex-row">
                    <MaterialAvatar className={classes.avatarStyle}>
                        <Person />
                    </MaterialAvatar>
                    <aside className="mx-4">
                        <h4>{name}</h4>
                        <h6 className="text-gray-400">{email}</h6>
                    </aside>
                </section>
                <footer className="flex flex-row justify-end my-4 mt-4">
                    <Button onClick={onClickAvatar} color="secondary">
                        Logout
                    </Button>
                </footer>
            </Dialog>
            <header className="flex flex-row justify-between items-center m-6">
                <Logo variant="row" onClick={onClickLogo} />
                <Avatar onClick={() => handleOnClose(true)} name={name} email={email} />
            </header>
        </>
    );
}
