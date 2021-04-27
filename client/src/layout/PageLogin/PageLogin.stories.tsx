import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PageLogin } from './PageLogin.component';
import { IPageLoginProps } from './PageLogin.props';

export default {
    title: 'Order-Manager/Layout/PageLogin',
    component: PageLogin,
} as Meta;

const Template: Story<IPageLoginProps> = (props: IPageLoginProps) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <PageLogin
            email={email}
            onEmailChange={setEmail}
            password={password}
            onPasswordChange={setPassword}
            onSubmit={() => undefined}
        />
    );
};

export const Default = Template.bind({});
