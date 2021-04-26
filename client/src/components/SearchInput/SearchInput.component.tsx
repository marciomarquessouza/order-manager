import React from 'react';
import { ISearchInputProps } from './SearchInput.props';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';

export function SearchInput({
    value,
    onChange,
    testId = 'search-input-component',
}: ISearchInputProps) {
    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        event.preventDefault();
        onChange(event.target.value);
    };

    return (
        <section className="flex flex-row items-center bg-white m-8 pb-3 pt-1 rounded-full">
            <aside className="flex flex-row mx-2 mt-3 ml-4">
                <Search fontSize="large" color="disabled" />
            </aside>
            <TextField
                label="Search"
                onChange={handleOnChange}
                value={value}
                fullWidth={true}
                color="secondary"
                inputProps={{ 'data-testid': testId }}
            />
            <div className="mx-4" />
        </section>
    );
}
