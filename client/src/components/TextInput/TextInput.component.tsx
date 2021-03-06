import React from 'react';
import { TextField } from '@material-ui/core';
import { ITextInputProps } from './TextInput.props';

export function TextInput({
    variant = 'standard',
    type = 'text',
    onChange,
    value,
    label,
    placeholder,
    testId = 'text-input-component',
    required,
    disabled,
    fullWidth,
    name,
    autoFocus = false,
    error = false,
}: ITextInputProps) {
    const handleChange = (element: React.ChangeEvent<HTMLTextAreaElement>): void => {
        element.preventDefault();
        onChange(element.target.value, name);
    };

    return (
        <TextField
            error={error}
            variant={variant}
            type={type}
            onChange={handleChange}
            value={value}
            label={label}
            inputProps={{ 'data-testid': testId }}
            placeholder={placeholder}
            color="primary"
            required={required}
            disabled={disabled}
            fullWidth={fullWidth}
            autoFocus={autoFocus}
        />
    );
}
