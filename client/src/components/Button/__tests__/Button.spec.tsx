import React from 'react';
import { Button, IButtonProps } from '../';
import { render, fireEvent } from '@testing-library/react';

const defaultProps: IButtonProps = {
    children: 'Test Button',
    onClick: jest.fn(),
};

const setup = (props: IButtonProps = defaultProps) => {
    const onCLickSpy = props.onClick;
    const utils = render(<Button {...props} />);
    const button = utils.getByTestId(/button-component/);
    return {
        button,
        onCLickSpy,
        ...utils,
    };
};

describe('#Button', () => {
    it('renders the component properly', () => {
        const { button } = setup();
        expect(button).toBeInTheDocument();
    });
});
