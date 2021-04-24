import React from 'react';
import { TextInput, ITextInputProps } from '..';
import { render } from '@testing-library/react';

const setup = (props: ITextInputProps) => {
    return render(<TextInput {...props} />);
};

const defaultProps: ITextInputProps = {
    value: 'test',
    onChange: jest.fn(),
};

describe('#TextInput', () => {
    it('renders component properly', () => {
        const { getByTestId } = setup(defaultProps);
        const component = getByTestId(/text-input-component/);
        expect(component).toBeInTheDocument();
    });
});
