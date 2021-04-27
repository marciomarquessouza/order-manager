import { ReactNode } from 'react';

export interface IPageHeaderProps {
    title: string;
    subtitle?: string;
    icon: ReactNode;
    searchText?: string;
    onSearchChange?: (text: string) => void;
    searchPlaceholder?: string;
    actionButtonLabel: string;
    onClickActionButton: () => void;
}
