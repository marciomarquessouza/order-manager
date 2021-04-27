import { IOrder } from '../../entities/IOrder';

export interface Data {
    code: string;
    title: string;
    bookingDate: number;
    address: string;
    customer: string;
}

export interface IPageOrdersListProps {
    data: IOrder[];
    onRowClick: (id: string) => void;
}
