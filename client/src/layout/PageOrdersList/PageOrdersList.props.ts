export interface Data {
    code: string;
    title: string;
    bookingDate: number;
    address: string;
    customer: string;
}

export interface IPageOrdersListProps {
    data: Data[];
    onRowClick: (id: string) => void;
}
