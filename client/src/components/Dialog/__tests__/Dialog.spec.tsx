import React from 'react';
import { Dialog, IDialogProps } from '..';
import { render, fireEvent } from '@testing-library/react';

const defaultProps: IDialogProps = {
    title: 'test',
    onClose: jest.fn(),
    open: true,
};

const setup = (props: IDialogProps = defaultProps) => {
    return render(<Dialog {...props} />);
};

describe('#Dialog', () => {
    it('renders component properly', () => {
        const { getByTestId } = setup();
        const dialog = getByTestId(/dialog-component/);
        expect(dialog).toBeInTheDocument();
    });

    describe('when the props open is false', () => {
        it('is not rendered', () => {
            const { queryByTestId } = setup({ ...defaultProps, open: false });
            const result = queryByTestId(/dialog-component/);
            expect(result).toBeNull();
        });
    });
});
