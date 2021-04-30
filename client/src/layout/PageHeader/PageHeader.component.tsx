import React from 'react';
import { AddCircle } from '@material-ui/icons';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';
import { IPageHeaderProps } from './PageHeader.props';
import { useStyles } from './PageHeader.styles';
import { IconButton } from '../../components/IconButton/IconButton.component';

export function PageHeader({
    icon,
    title,
    subtitle,
    searchText = '',
    isLoading = false,
    onSearchChange,
    actionButtonLabel,
    actionButtonIcon = 'create',
    searchPlaceholder,
    onClickActionButton,
}: IPageHeaderProps) {
    const classes = useStyles();

    return (
        <header className={classes.headerContainer}>
            <aside className="hidden sm:flex items-start justify-start pt-12 pl-8">
                <div className="text-white mr-2">{icon}</div>
                <div className="text-white text-2xl">
                    <span className="font-bold uppercase">{title}</span>
                    {subtitle && (
                        <p className="text-white text-lg max-w-2xl truncate">{subtitle}</p>
                    )}
                </div>
            </aside>
            <div className="flex items-start pt-12 md:w-2/4 sm:w-3/4 ml-4">
                {onSearchChange && (
                    <SearchInput
                        value={searchText}
                        onChange={onSearchChange}
                        placeholder={searchPlaceholder}
                    />
                )}
            </div>
            <aside className="flex items-start justify-end pr-8 md:pt-12">
                <div className="hidden sm:block bg-white rounded">
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={onClickActionButton}
                        isLoading={isLoading}
                        fullWidth
                    >
                        {actionButtonLabel}
                    </Button>
                </div>
                <div className="md:hidden text-white flex items-start justify-start pt-9">
                    <IconButton
                        onClick={onClickActionButton}
                        label={actionButtonLabel}
                        icon={actionButtonIcon}
                    />
                </div>
            </aside>
        </header>
    );
}
