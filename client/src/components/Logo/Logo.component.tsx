import React from 'react';
import logo from '../../assets/logo.svg';
import logoHeader from '../../assets/logo-header.svg';
import { ILogoProps } from './Logo.props';

export function Logo({ variant }: ILogoProps) {
    return <img src={variant === 'standard' ? logo : logoHeader} alt="logo" />;
}
