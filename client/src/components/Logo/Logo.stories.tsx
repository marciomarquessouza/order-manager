import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Logo } from './Logo.component';
import { ILogoProps } from './Logo.props';

export default {
    title: 'Order-Manager/Logo',
    component: Logo,
} as Meta;

const Template: Story<ILogoProps> = (props) => (
    <div className="m-4">
        <Logo {...props} />
    </div>
);

export const Standard = Template.bind({});
Standard.args = {
    variant: 'standard',
};

export const Row = Template.bind({});
Row.args = {
    variant: 'row',
};
