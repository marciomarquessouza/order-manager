import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextInput } from './TextInput.component';
import { ITextInputProps } from './TextInput.props';

export default {
    title: 'Order-Manager/TextInput',
    component: TextInput,
} as Meta;

const Template: Story<ITextInputProps> = (props) => <TextInput {...props} />;

export const Email = Template.bind({});
Email.args = {
    type: 'email',
    variant: 'outlined',
    placeholder: 'Add your email',
    label: 'E-mail',
};
