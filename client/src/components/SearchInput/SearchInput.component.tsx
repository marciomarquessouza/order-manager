import React from 'react';
import { ISearchInputProps } from './SearchInput.props';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';

export function SearchInput({
    value,
    onChange,
    placeholder = 'Search',
    testId = 'search-input-component',
}: ISearchInputProps) {
    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        event.preventDefault();
        onChange(event.target.value);
    };

    return (
        <section className="flex flex-1 flex-row items-center bg-white rounded-full p-1 max-h-10">
            <aside className="flex flex-row mx-2">
                <Search fontSize="small" color="action" />
            </aside>
            <TextField
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                fullWidth={true}
                color="primary"
                inputProps={{ 'data-testid': testId }}
            />
            <div className="mx-2" />
        </section>
    );
}
