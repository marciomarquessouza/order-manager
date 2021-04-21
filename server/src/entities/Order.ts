import { IAddress } from './IAddress';
import { ICustomer } from './ICustomer';
import { uuid } from 'uuidv4';

export class Order {
    readonly uid: string;
    public title: string;
    public bookingDate: Date;
    public address: IAddress;
    public customer: ICustomer;

    constructor(props: Omit<Order, 'uid'>, uid?: string) {
        Object.assign(this, props);

        if (!uid) {
            this.uid = uuid();
        }
    }
}
