import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PageLoading } from './PageLoading.component';

export default {
    title: 'Order-Manager/Layout/PageLoading',
    component: PageLoading,
} as Meta;

const Template: Story = () => <PageLoading />;

export const Default = Template.bind({});
