import React from 'react';
import { IAvatarProps, useStyles } from '.';
import MaterialAvatar from '@material-ui/core/Avatar';

export function Avatar({ name, email, onClick, testId = 'avatar-component' }: IAvatarProps) {
    const classess = useStyles();

    return (
        <div
            data-testid={testId}
            onClick={onClick}
            onKeyPress={onClick}
            role="button"
            tabIndex={0}
            className="inline-flex"
        >
            <section className="flex-1 text-right pr-2 max-w-xs">
                <p className="text-sm truncate">{name}</p>
                <p className="text-xs text-gray-400 truncate">{email}</p>
            </section>
            <aside className="flex-1 max-w-xs">
                <MaterialAvatar className={classess.avatarStyle}>
                    {name.substr(0, 1)}
                </MaterialAvatar>
            </aside>
        </div>
    );
}
