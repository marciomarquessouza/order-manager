import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Dialog } from './Dialog.component';
import { IDialogProps } from './Dialog.props';

export default {
    title: 'Order-Manager/Dialog',
    component: Dialog,
} as Meta;

const Template: Story<IDialogProps> = (props) => (
    <div className="m-4">
        <Dialog {...props}>
            <div>Dialog Content</div>
        </Dialog>
    </div>
);

export const Default = Template.bind({});
Default.args = {
    title: 'Dialog Example',
    open: false,
};
