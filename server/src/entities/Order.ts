import { IAddress } from './IAddress';
import { ICustomer } from './ICustomer';
import { uuid } from 'uuidv4';

export class Order {
    readonly id: string;
    public title: string;
    public bookingDate: Date;
    public address: IAddress;
    public customer: ICustomer;

    constructor(props: Omit<Order, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}
