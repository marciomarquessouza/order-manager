export namespace UpdateOrder {
    export type Params = {
        title?: string;
        bookingDate?: Date;
    };
}

export interface UpdateOrder {
    execute(data: UpdateOrder.Params, id: string): Promise<void>;
}
