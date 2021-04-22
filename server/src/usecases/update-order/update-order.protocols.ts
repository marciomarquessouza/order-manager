export namespace UpdateOrder {
    export type Params = {
        uid: string;
        title?: string;
        bookingDate?: number;
    };
}

export interface UpdateOrder {
    execute(data: UpdateOrder.Params): Promise<void>;
}
