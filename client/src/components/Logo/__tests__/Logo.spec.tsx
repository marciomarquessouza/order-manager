import React from 'react';
import { Logo, ILogoProps } from '../';
import { render, fireEvent } from '@testing-library/react';

const defaultProps: ILogoProps = {
    variant: 'row',
    onClick: jest.fn(),
};

const setup = (props: ILogoProps = defaultProps) => {
    const onCLickSpy = props.onClick;
    const utils = render(<Logo {...props} />);
    const logo = utils.getByTestId(/logo-component/);
    return {
        logo,
        onCLickSpy,
        ...utils,
    };
};

describe('#Logo', () => {
    it('renders the component properly', () => {
        const { logo } = setup();
        expect(logo).toBeInTheDocument();
    });

    describe('when the logo is clicked', () => {
        it('calls the onClick method', () => {
            const { logo, onCLickSpy } = setup();
            fireEvent.click(logo);
            expect(onCLickSpy).toHaveBeenCalledTimes(1);
        });
    });
});
