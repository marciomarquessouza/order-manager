import React from 'react';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';
import { IPageHeaderProps } from './PageHeader.props';
import { useStyles } from './PageHeader.styles';

export function PageHeader({
    icon,
    title,
    subtitle,
    searchText = '',
    onSearchChange,
    actionButtonLabel,
    searchPlaceholder,
    onClickActionButton,
}: IPageHeaderProps) {
    const classes = useStyles();
    return (
        <header className={classes.headerContainer}>
            <aside className="flex items-start justify-start pt-12 pl-8">
                <div className="text-white mr-2">{icon}</div>
                <p className="text-white text-2xl">
                    <span className="font-bold uppercase">{title}</span>
                    {subtitle && (
                        <p className="text-white text-lg max-w-2xl truncate">{subtitle}</p>
                    )}
                </p>
            </aside>
            <div className="flex items-start pt-12">
                {onSearchChange && (
                    <SearchInput
                        value={searchText}
                        onChange={onSearchChange}
                        placeholder={searchPlaceholder}
                    />
                )}
            </div>
            <aside className="flex items-start justify-end pt-12 pr-8">
                <div className="bg-white rounded w-40">
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={onClickActionButton}
                        fullWidth
                    >
                        {actionButtonLabel}
                    </Button>
                </div>
            </aside>
        </header>
    );
}
