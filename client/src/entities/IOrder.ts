import { IAddress } from './IAddress';
import { ICustomer } from './ICustomer';

export interface IOrder {
    readonly uid: string;
    title: string;
    bookingDate: number;
    address: IAddress;
    customer: ICustomer;
}
