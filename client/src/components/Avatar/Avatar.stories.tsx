import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Avatar, IAvatarProps } from './';

export default {
    title: 'Order-Manager/Avatar',
    component: Avatar,
} as Meta;

const Template: Story<IAvatarProps> = (props) => (
    <div className="m-4">
        <Avatar {...props} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    name: 'Marcio Marques de Souza',
    email: 'marcio.processo@gmail.com',
};