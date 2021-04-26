import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PageOrdersList, IPageOrdersListProps } from './';

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
    data: [
        {
            code: 'order1',
            title: 'Test Order 1',
            bookingDate: 1561172400000,
            address: 'Wriezener Str. 12',
            customer: 'Emad Alam',
        },
        {
            code: 'order2',
            title: 'Test Order 2',
            bookingDate: 1554284950000,
            address: 'Washington Luiz. 4150',
            customer: 'Marcio Souza',
        },
    ],
    onRowClick: () => undefined,
};
