import React from 'react';
import logo from '../../assets/logo.svg';
import logoHeader from '../../assets/logo-header.svg';
import { ILogoProps } from './Logo.props';

export function Logo({ variant, onClick, testId = 'logo-component' }: ILogoProps) {
    return (
        <button data-testid={testId} onClick={onClick}>
            <img src={variant === 'standard' ? logo : logoHeader} alt="logo" />
        </button>
    );
}
