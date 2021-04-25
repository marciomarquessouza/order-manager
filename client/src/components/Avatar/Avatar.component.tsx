import React from 'react';
import { IAvatarProps } from './Avatar.props';
import MaterialAvatar from '@material-ui/core/Avatar';

export function Avatar({ name, email, onClick, testId = 'avatar-component' }: IAvatarProps) {
    return (
        <div data-testid={testId} onClick={onClick} onKeyPress={onClick} role="button" tabIndex={0}>
            <section>
                <p>{name}</p>
                <p>{email}</p>
            </section>
            <aside>
                <MaterialAvatar>{name.substr(0, 1)}</MaterialAvatar>
            </aside>
        </div>
    );
}
