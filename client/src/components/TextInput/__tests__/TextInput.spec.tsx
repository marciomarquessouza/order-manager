import React from 'react';
import { TextInput, ITextInputProps } from '..';
import { render, fireEvent } from '@testing-library/react';

const defaultProps: ITextInputProps = {
    value: 'test',
    onChange: jest.fn(),
};

const setup = (props: ITextInputProps = defaultProps) => {
    const onChangeSpy = props.onChange;
    const utils = render(<TextInput {...props} />);
    const textInput = utils.getByTestId(/text-input-component/);
    return {
        textInput,
        onChangeSpy,
        ...utils,
    };
};

describe('#TextInput', () => {
    it('renders component properly', () => {
        const { textInput } = setup();
        expect(textInput).toBeInTheDocument();
    });

    describe('when a new text is entered', () => {
        it('calls the onChange mehotd', () => {
            const { textInput, onChangeSpy } = setup();
            fireEvent.change(textInput, { target: { value: 'new text' } });
            expect(onChangeSpy).toBeCalledWith('new text');
        });
    });
});
