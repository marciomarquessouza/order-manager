import React from 'react';
import { Avatar, IAvatarProps } from '../';
import { render, fireEvent } from '@testing-library/react';

const defaultProps: IAvatarProps = {
    name: 'My Complete Name',
    email: 'my@email.com',
    onClick: jest.fn(),
};

const setup = (props: IAvatarProps = defaultProps) => {
    const onCLickSpy = props.onClick;
    const utils = render(<Avatar {...props} />);
    const avatar = utils.getByTestId(/avatar-component/);
    return {
        avatar,
        onCLickSpy,
        ...utils,
    };
};

describe('#Avatar', () => {
    it('renders the component properly', () => {
        const { avatar } = setup();
        expect(avatar).toBeInTheDocument();
    });

    describe('when the button is clicked', () => {
        it('calls the onClick method', () => {
            const { avatar, onCLickSpy } = setup();
            fireEvent.click(avatar);
            expect(onCLickSpy).toHaveBeenCalledTimes(1);
        });
    });
});
