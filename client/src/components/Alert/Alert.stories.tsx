import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Alert } from './Alert.component';
import { IAlertProps } from './Alert.props';
import { Button } from '../Button';

export default {
    title: 'Order-Manager/Components/Alert',
    component: Alert,
} as Meta;

const Template: Story<IAlertProps> = (props) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="m-4">
            <Button onClick={() => setOpen(true)}>Open Alert</Button>
            <Alert {...{ ...props, open, onClose: () => setOpen(false) }} />
        </div>
    );
};

export const Error = Template.bind({});
Error.args = {
    severity: 'error',
    children: 'Error Message',
};

export const Info = Template.bind({});
Info.args = {
    severity: 'info',
    children: 'Info Message',
};

export const Success = Template.bind({});
Success.args = {
    severity: 'success',
    children: 'Info Message',
};

export const Warning = Template.bind({});
Warning.args = {
    severity: 'warning',
    children: 'Warning Message',
};
