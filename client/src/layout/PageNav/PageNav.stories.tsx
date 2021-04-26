import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PageNav } from './PageNav.component';
import { IPageNavProps } from './PageNav.props';

export default {
    title: 'Order-Manager/Layout/PageNav',
    component: PageNav,
} as Meta;

const Template: Story<IPageNavProps> = (props) => <PageNav {...props} />;

export const Standard = Template.bind({});
Standard.args = {
    name: 'Marcio Marques de Souza',
    email: 'marcio.processo@gmail.com',
};
