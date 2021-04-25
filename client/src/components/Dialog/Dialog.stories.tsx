import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Dialog } from './Dialog.component';
import { IDialogProps } from './Dialog.props';
import { Avatar } from '../Avatar';
import { Button } from '../Button';

export default {
    title: 'Order-Manager/Dialog',
    component: Dialog,
} as Meta;

const Template: Story<IDialogProps> = (props) => {
    const [open, setOpen] = useState(false);
    const name = 'example';
    const email = 'example@email.com';

    return (
        <div className="m-4">
            <Avatar name={name} email={email} onClick={() => setOpen(true)} />
            <Dialog {...props} open={open} onClose={() => setOpen(false)}>
                <article>
                    <p>
                        <span className="font-bold mx-2">Name:</span>
                        {name}
                    </p>
                    <p>
                        <span className="font-bold mx-2">Email:</span>
                        {email}
                    </p>
                    <footer className="my-8">
                        <Button onClick={() => undefined}>Logout</Button>
                    </footer>
                </article>
            </Dialog>
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    title: 'User Profile',
    open: false,
};
