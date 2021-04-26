import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PageHeader } from './PageHeader.component';
import { IPageHeaderProps } from './PageHeader.props';
import { ListAlt } from '@material-ui/icons';

export default {
    title: 'Order-Manager/Layout/PageHeader',
    component: PageHeader,
} as Meta;

const Template: Story<IPageHeaderProps> = (props: IPageHeaderProps) => {
    const [searchText, setSearchText] = React.useState('');

    return (
        <PageHeader
            title={props.title}
            subtitle={props.subtitle}
            searchText={searchText}
            onSearchChange={!props.subtitle ? setSearchText : undefined}
            icon={<ListAlt color="inherit" fontSize="large" />}
            actionButtonLabel={props.actionButtonLabel}
            onClickActionButton={props.onClickActionButton}
        />
    );
};

export const ListHeader = Template.bind({});
ListHeader.args = {
    title: 'Orders',
    actionButtonLabel: 'New Order',
    onClickActionButton: () => undefined,
};

export const DetailHeader = Template.bind({});
DetailHeader.args = {
    title: 'Orders',
    subtitle: 'Test Order 1',
    actionButtonLabel: 'Save',
    onClickActionButton: () => undefined,
};
