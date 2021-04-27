import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PageCard } from './PageCard.component';
import { IPageCardProps } from './PageCard.props';

export default {
    title: 'Order-Manager/Layout/PageCard',
    component: PageCard,
} as Meta;

const Template: Story<IPageCardProps> = (props) => (
    <PageCard {...props}>
        <div>
            <h2>Title</h2>
            <p>My Text Body</p>
        </div>
    </PageCard>
);

export const Standard = Template.bind({});
Standard.args = {
    title: 'Order Detail',
};
