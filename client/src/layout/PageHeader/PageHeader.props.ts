import { ReactNode } from 'react';
import { IconType } from '../../components/IconButton';

export interface IPageHeaderProps {
    title: string;
    subtitle?: string;
    icon: ReactNode;
    searchText?: string;
    onSearchChange?: (text: string) => void;
    searchPlaceholder?: string;
    actionButtonLabel: string;
    actionButtonIcon: IconType;
    isLoading?: boolean;
    onClickActionButton: () => void;
}
