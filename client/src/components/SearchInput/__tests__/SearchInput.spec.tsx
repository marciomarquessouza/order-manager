import React from 'react';
import { SearchInput, ISearchInputProps } from '..';
import { render, fireEvent } from '@testing-library/react';

const defaultProps: ISearchInputProps = {
    value: 'test',
    onChange: jest.fn(),
};

const setup = (props: ISearchInputProps = defaultProps) => {
    const onChangeSpy = props.onChange;
    const utils = render(<SearchInput {...props} />);
    const searchInput = utils.getByTestId(/search-input-component/);
    return {
        searchInput,
        onChangeSpy,
        ...utils,
    };
};

describe('#SearchInput', () => {
    it('renders component properly', () => {
        const { searchInput } = setup();
        expect(searchInput).toBeInTheDocument();
    });

    describe('when a new text is entered', () => {
        it('calls the onChange method', () => {
            const { searchInput, onChangeSpy } = setup();
            fireEvent.change(searchInput, { target: { value: 'new text' } });
            expect(onChangeSpy).toBeCalledWith('new text');
        });
    });
});
