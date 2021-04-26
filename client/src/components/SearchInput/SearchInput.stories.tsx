import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SearchInput } from './SearchInput.component';
import { ISearchInputProps } from './SearchInput.props';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default {
    title: 'Order-Manager/Components/SearchInput',
    component: SearchInput,
} as Meta;

const Template: Story<ISearchInputProps> = (props) => {
    return (
        <div
            style={{
                background: 'linear-gradient(89.97deg, #3C7257 0.65%, #56A086 99.97%), #C4C4C4',
                padding: 12,
                height: 175,
            }}
        >
            <SearchInput {...props} />
        </div>
    );
};

export const Default = Template.bind({});
