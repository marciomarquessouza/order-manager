import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Table, ITableProps } from './';
import { createTableProps } from './mock/Table.mock';

export default {
    title: 'Order-Manager/Components/Table',
    component: Table,
} as Meta;

const Template: Story<ITableProps> = (props) => <Table {...props} />;

export const Default = Template.bind({});
Default.args = { ...createTableProps(), onClick: () => undefined };
