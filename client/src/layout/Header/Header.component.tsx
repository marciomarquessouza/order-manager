import React from 'react';
import { Avatar } from '../../components/Avatar';
import { Logo } from '../../components/Logo';
import { IHeaderProps } from './Header.props';

export function Header({ name, email, onClickAvatar, onClickLogo }: IHeaderProps) {
    return (
        <header className="flex flex-row justify-between items-center m-2">
            <button onClick={onClickLogo}>
                <Logo variant="row" />
            </button>
            <Avatar onClick={onClickAvatar} name={name} email={email} />
        </header>
    );
}
