import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PageOrderDetail } from './PageOrderDetail.component';
import { IPageOrderDetailProps } from './PageOrderDetail.props';
import { mockOrder } from '../../entities/mocks/mock-order';

export default {
    title: 'Order-Manager/Layout/PageOrderDetail',
    component: PageOrderDetail,
} as Meta;

const Template: Story<IPageOrderDetailProps> = (props) => (
    <PageOrderDetail {...props}>
        <div>
            <h2>Title</h2>
            <p>My Text Body</p>
        </div>
    </PageOrderDetail>
);

const order = mockOrder();

export const Standard = Template.bind({});
Standard.args = {
    order,
    title: order.title,
    onTitleChange: () => undefined,
    bookingDate: order.bookingDate,
    onBookingDateChange: () => undefined,
};
