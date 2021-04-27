import moment from 'moment';
import { Row } from '../';
import { IOrder } from '../../../entities/IOrder';

interface Data {
    code: string;
    title: string;
    bookingDate: number;
    address: string;
    customer: string;
}

export function createOrderData(props: Data): Row {
    const formatedDate = moment(props.bookingDate).format('DD.MM.YYYY');
    return { ...props, bookingDate: formatedDate };
}

export function createOrderList(props: IOrder): Row {
    return {
        code: props.uid,
        title: props.title,
        address: props.address.street,
        customer: props.customer.name,
        bookingDate: moment(props.bookingDate).format('DD.MM.YYYY'),
    };
}
