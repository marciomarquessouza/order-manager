import React from 'react';
import { IAvatarProps } from './Avatar.props';
import MaterialAvatar from '@material-ui/core/Avatar';

export function Avatar({ name, email, onClick, testId = 'avatar-component' }: IAvatarProps) {
    return (
        <main data-testid={testId}>
            <section>
                <p>{name}</p>
                <p>{email}</p>
            </section>
            <aside>
                <MaterialAvatar>{name.substr(0, 1)}</MaterialAvatar>
            </aside>
        </main>
    );
}
