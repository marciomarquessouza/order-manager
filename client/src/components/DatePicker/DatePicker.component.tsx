import React from 'react';
import { IDatePickerProps } from './DatePicker.props';
import DateMomentUtils from '@date-io/moment';
import { Moment } from 'moment';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export function DatePicker({
    value,
    onChange,
    label,
    required = false,
    testId = 'date-picker-component',
    name,
}: IDatePickerProps) {
    const handleDateChange = (date: Moment | null) => {
        const newDate = date ? new Date(date.calendar()).valueOf() : new Date().valueOf();
        onChange(newDate, name);
    };

    return (
        <MuiPickersUtilsProvider utils={DateMomentUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/DD/yyyy"
                margin="normal"
                id="date-picker-inline"
                label={`${label} (MM/DD/yyyy)`}
                value={value}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                inputProps={{ 'data-testid': testId }}
                required={required}
            />
        </MuiPickersUtilsProvider>
    );
}
