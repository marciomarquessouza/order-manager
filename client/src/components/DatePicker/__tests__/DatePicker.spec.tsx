import React from 'react';
import { DatePicker, IDatePickerProps } from '..';
import { render, fireEvent } from '@testing-library/react';

const defaultProps: IDatePickerProps = {
    value: 1554284950000,
    onChange: jest.fn(),
    label: 'Booking Date',
};

const setup = (props: IDatePickerProps = defaultProps) => {
    const onChangeSpy = props.onChange;
    const utils = render(<DatePicker {...props} />);
    const datePicker = utils.getByTestId(/date-picker-component/);
    return {
        datePicker,
        onChangeSpy,
        ...utils,
    };
};

describe('#DatePicker', () => {
    it('renders component properly', () => {
        const { datePicker } = setup();
        expect(datePicker).toBeInTheDocument();
    });

    describe('when a new date is entered', () => {
        it('calls the onChange method', () => {
            const { datePicker, onChangeSpy } = setup();
            fireEvent.change(datePicker, { target: { value: 1554284950000 } });
            expect(onChangeSpy).toBeCalled();
        });
    });
});
