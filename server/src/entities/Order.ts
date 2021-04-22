import { IAddress } from './IAddress';
import { ICustomer } from './ICustomer';

export class Order {
    readonly uid: string;
    public title: string;
    public bookingDate: Date;
    public address: IAddress;
    public customer: ICustomer;

    constructor(props: Order) {
        Object.assign(this, props);
    }
}
