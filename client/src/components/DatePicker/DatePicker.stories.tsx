import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { DatePicker } from './DatePicker.component';
import { IDatePickerProps } from './DatePicker.props';

export default {
    title: 'Order-Manager/Components/DatePicker',
    component: DatePicker,
} as Meta;

const Template: Story<IDatePickerProps> = (props) => {
    const [date, setDate] = useState(1554284950000);
    return (
        <div className="m-4">
            <DatePicker value={date} onChange={setDate} label="Booking Date" />
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    value: 1554284950000,
};
