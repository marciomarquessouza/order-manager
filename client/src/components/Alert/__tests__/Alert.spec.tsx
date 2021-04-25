import React from 'react';
import { Alert, IAlertProps } from '..';
import { render } from '@testing-library/react';

const defaultProps: IAlertProps = {
    children: 'Alert Message',
    onClose: jest.fn(),
    open: true,
    severity: 'success',
};

const setup = (props: IAlertProps = defaultProps) => {
    return render(<Alert {...props} />);
};

describe('#Alert', () => {
    it('renders component properly', () => {
        const { getByTestId } = setup();
        const alert = getByTestId(/alert-component/);
        expect(alert).toBeInTheDocument();
    });

    describe('when the props open is false', () => {
        it('is not rendered', () => {
            const { queryByTestId } = setup({ ...defaultProps, open: false });
            const result = queryByTestId(/alert-component/);
            expect(result).toBeNull();
        });
    });
});
