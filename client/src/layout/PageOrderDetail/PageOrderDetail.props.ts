import { IOrder } from '../../entities/IOrder';

export interface IPageOrderDetailProps {
    order: IOrder;
    title: string;
    onTitleChange: (title: string) => void;
    bookingDate: number;
    onBookingDateChange: (date: number) => void;
}
