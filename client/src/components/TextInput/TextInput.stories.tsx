import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextInput } from './TextInput.component';
import { ITextInputProps } from './TextInput.props';

export default {
    title: 'Order-Manager/TextInput',
    component: TextInput,
} as Meta;

const Template: Story<ITextInputProps> = (props) => (
    <div className="m-4">
        <TextInput {...props} />
    </div>
);

export const Email = Template.bind({});
Email.args = {
    type: 'email',
    variant: 'outlined',
    placeholder: 'Add your email',
    label: 'E-mail',
};

export const Password = Template.bind({});
Password.args = {
    type: 'password',
    variant: 'outlined',
    placeholder: 'Add your password',
    label: 'Password',
};

export const Text = Template.bind({});
Text.args = {
    type: 'text',
    variant: 'standard',
    placeholder: 'Add your text here',
    label: 'Field Name',
};
