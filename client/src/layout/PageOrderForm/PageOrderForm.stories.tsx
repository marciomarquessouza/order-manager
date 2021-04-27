import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PageOrderForm } from './PageOrderForm.component';
import { IPageOrderFormProps } from './PageOrderForm.props';
import { createOrderProps } from '../../entities/mocks/mock-order';

export default {
    title: 'Order-Manager/Layout/PageOrderForm',
    component: PageOrderForm,
} as Meta;

const Template: Story<IPageOrderFormProps> = (props) => {
    const [order, setOrder] = React.useState(createOrderProps());
    return <PageOrderForm {...{ ...props, order, onOrderChange: setOrder }} />;
};

export const Standard = Template.bind({});
Standard.args = {
    onSubmit: () => undefined,
    onOrderTitleChange: () => undefined,
};
