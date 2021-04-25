import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Header } from './Header.component';
import { IHeaderProps } from './Header.props';

export default {
    title: 'Order-Manager/Layout/Header',
    component: Header,
} as Meta;

const Template: Story<IHeaderProps> = (props) => <Header {...props} />;

export const Standard = Template.bind({});
Standard.args = {
    name: 'Marcio Marques de Souza',
    email: 'marcio.processo@gmail.com',
};
