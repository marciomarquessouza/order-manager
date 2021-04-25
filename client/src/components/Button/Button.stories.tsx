import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './Button.component';
import { IButtonProps } from './Button.props';

export default {
    title: 'Order-Manager/Components/Button',
    component: Button,
} as Meta;

const Template: Story<IButtonProps> = (props) => (
    <div className="m-4">
        <Button {...props}>Button</Button>
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    color: 'primary',
    variant: 'contained',
};

export const Text = Template.bind({});
Text.args = {
    color: 'secondary',
    variant: 'text',
};

export const Disabled = Template.bind({});
Disabled.args = {
    color: 'primary',
    variant: 'contained',
    disabled: true,
};
