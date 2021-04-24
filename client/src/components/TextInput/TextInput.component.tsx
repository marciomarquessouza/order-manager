import React from 'react';
import { TextField } from '@material-ui/core';
import { ITextInputProps } from './TextInput.props';

export function TextInput({
    variant = 'standard',
    type = 'text',
    onChange,
    value,
    testId = 'text-input-component',
}: ITextInputProps) {
    return (
        <TextField data-testid={testId} variant={variant} type={type} onChange={() => undefined} />
    );
}
