import { IOrder } from '../../entities/IOrder';

export type IOrderProps = Omit<IOrder, 'uid'>;

export interface IPageOrderFormProps {
    order: IOrderProps;
    onOrderChange: (order: IOrderProps) => void;
    onSubmit: (order: IOrderProps) => void;
    onOrderTitleChange: (title: string) => void;
    onError?: (error: string) => void;
}
