import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PageOrdersList, IPageOrdersListProps } from './';
import { mockOrders } from '../../entities/mocks/mock-order';

export default {
    title: 'Order-Manager/Layout/PageOrdersList',
    component: PageOrdersList,
} as Meta;

const Template: Story<IPageOrdersListProps> = (props) => (
    <div className="bg-green-300">
        <PageOrdersList {...props} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    data: mockOrders(),
    onRowClick: () => undefined,
};
