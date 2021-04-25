import React from 'react';
import { TextField } from '@material-ui/core';
import { ITextInputProps } from './TextInput.props';

export function TextInput({
    variant = 'standard',
    type = 'text',
    onChange,
    value,
    label,
    testId = 'text-input-component',
}: ITextInputProps) {
    const handleChange = (element: React.ChangeEvent<HTMLTextAreaElement>): void => {
        element.preventDefault();
        onChange(element.target.value);
    };

    return (
        <TextField
            variant={variant}
            type={type}
            onChange={handleChange}
            value={value}
            label={label}
            inputProps={{ 'data-testid': testId }}
        />
    );
}
