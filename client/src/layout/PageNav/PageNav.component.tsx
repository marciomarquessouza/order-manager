import React from 'react';
import { Avatar } from '../../components/Avatar';
import { Logo } from '../../components/Logo';
import { IPageNavProps } from './PageNav.props';

export function PageNav({ name, email, onClickAvatar, onClickLogo }: IPageNavProps) {
    return (
        <header className="flex flex-row justify-between items-center m-2">
            <Logo variant="row" onClick={onClickLogo} />
            <Avatar onClick={onClickAvatar} name={name} email={email} />
        </header>
    );
}
