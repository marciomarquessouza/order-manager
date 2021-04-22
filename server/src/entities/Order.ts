import { IAddress } from './IAddress';
import { ICustomer } from './ICustomer';

export class Order {
    readonly uid: string;
    title: string;
    bookingDate: Date;
    address: IAddress;
    customer: ICustomer;

    constructor(props: Order) {
        Object.assign(this, props);
    }
}
