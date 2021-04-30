import React from 'react';
import { IconButton, IIconButtonProps } from '../';
import { render, fireEvent } from '@testing-library/react';

const defaultProps: IIconButtonProps = {
    label: 'Test Button',
    onClick: jest.fn(),
    icon: 'create',
};

const setup = (props: IIconButtonProps = defaultProps) => {
    const onCLickSpy = props.onClick;
    const utils = render(<IconButton {...props} />);
    const iconButon = utils.getByTestId(/button-component/);
    return {
        iconButon,
        onCLickSpy,
        ...utils,
    };
};

describe('#IconButton', () => {
    it('renders the component properly', () => {
        const { iconButon } = setup();
        expect(iconButon).toBeInTheDocument();
    });

    describe('when the icon button is clicked', () => {
        it('calls the onClick method', () => {
            const { iconButon, onCLickSpy } = setup();
            fireEvent.click(iconButon);
            expect(onCLickSpy).toHaveBeenCalledTimes(1);
        });
    });
});
