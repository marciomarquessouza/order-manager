import React from 'react';
import { Story, Meta } from '@storybook/react';
import { IconButton } from './IconButton.component';
import { IIconButtonProps } from './IconButton.props';

export default {
    title: 'Order-Manager/Components/IconButton',
    component: IconButton,
} as Meta;

const Template: Story<IIconButtonProps> = (props) => (
    <div className="m-4 color text-white">
        <IconButton {...props} />
    </div>
);

export const Add = Template.bind({});
Add.args = {
    label: 'Add',
    onClick: () => undefined,
    icon: 'create',
};

export const Save = Template.bind({});
Save.args = {
    label: 'Save',
    onClick: () => undefined,
    icon: 'save',
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Save',
    onClick: () => undefined,
    icon: 'save',
    disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
    label: 'Save',
    onClick: () => undefined,
    icon: 'save',
    isLoading: true,
};
