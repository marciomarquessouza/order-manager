import moment from 'moment';
import { Row } from '../';

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
