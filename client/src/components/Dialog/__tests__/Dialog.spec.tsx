import React from 'react';
import { Dialog, IDialogProps } from '..';
import { render, fireEvent } from '@testing-library/react';

const defaultProps: IDialogProps = {
    title: 'test',
    onClose: jest.fn(),
    open: true,
};

const setup = (props: IDialogProps = defaultProps) => {
    const onCloseSpy = props.onClose;
    const utils = render(<Dialog {...props} />);
    const dialog = utils.getByTestId(/dialog-component/);
    return {
        dialog,
        onCloseSpy,
        ...utils,
    };
};

describe('#TextInput', () => {
    it('renders component properly', () => {
        const { dialog } = setup();
        expect(dialog).toBeInTheDocument();
    });

    // describe('when a new text is entered', () => {
    //     it('calls the onChange method', () => {
    //         const { textInput, onChangeSpy } = setup();
    //         fireEvent.change(textInput, { target: { value: 'new text' } });
    //         expect(onChangeSpy).toBeCalledWith('new text');
    //     });
    // });
});
