/* eslint-disable no-console */
import React, { useCallback } from 'react';
import { DatePicker } from '../../components/DatePicker';
import { TextInput } from '../../components/TextInput';
import { IPageOrderFormProps } from './PageOrderForm.props';
import { Business, Person } from '@material-ui/icons';
import { PageCard } from '../PageCard';
import { useStyles } from './PageOrderForm.styles';

export function PageOrderForm({
    order,
    onOrderChange,
    onSubmit,
    onOrderTitleChange,
    onError,
}: IPageOrderFormProps) {
    const classes = useStyles();

    const handleBasicDataChange = useCallback(
        (value: string | number, name?: string) => {
            if (name) {
                onOrderChange({ ...order, [name]: value });
            }

            if (name === 'title' && typeof value === 'string') {
                onOrderTitleChange(value);
            }
        },
        [onOrderChange, onOrderTitleChange, order],
    );

    const handleAddressChange = useCallback(
        (value: string, name?: string) => {
            if (name) {
                onOrderChange({ ...order, address: { ...order.address, [name]: value } });
            }
        },
        [onOrderChange, order],
    );

    const handleCustomerChange = useCallback(
        (value: string, name?: string) => {
            if (name) {
                onOrderChange({ ...order, customer: { ...order.customer, [name]: value } });
            }
        },
        [order, onOrderChange],
    );

    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            onSubmit(order);
        },
        [onSubmit, order],
    );

    return (
        <PageCard title="New Order">
            <form onSubmit={handleSubmit}>
                <section className="flex flex-col max-w-sm m-6">
                    <TextInput
                        name="title"
                        type="text"
                        placeholder="Order Title"
                        label="Title"
                        value={order.title}
                        onChange={handleBasicDataChange}
                        required
                    />
                    <DatePicker
                        name="bookingDate"
                        value={order.bookingDate}
                        onChange={handleBasicDataChange}
                        label="Booking Date"
                        required
                    />
                </section>
                <section className="max-w-sm m-6">
                    <header className="flex items-center my-4">
                        <Person fontSize="small" color="primary" />
                        <span className={classes.pageTitleStyle}>Customer</span>
                    </header>
                    <article className="mx-4">
                        <div className="my-4">
                            <TextInput
                                name="name"
                                type="text"
                                placeholder="Customer Name"
                                label="Customer Name"
                                value={order.customer.name}
                                onChange={handleCustomerChange}
                                fullWidth
                            />
                        </div>
                        <div className="my-4">
                            <TextInput
                                name="email"
                                type="email"
                                placeholder="Customer Email"
                                label="Customer Email"
                                value={order.customer.email}
                                onChange={handleCustomerChange}
                                fullWidth
                            />
                        </div>
                        <div className="my-4">
                            <TextInput
                                name="phone"
                                type="text"
                                placeholder="Customer Phone"
                                label="Customer Phone"
                                value={order.customer.phone}
                                onChange={handleCustomerChange}
                                fullWidth
                            />
                        </div>
                    </article>
                </section>
                <section className="max-w-sm m-6">
                    <header className="flex items-center my-4">
                        <Business fontSize="small" color="primary" />
                        <span className={classes.pageTitleStyle}>Address</span>
                    </header>
                    <article className="mx-4">
                        <div className="my-4">
                            <TextInput
                                name="street"
                                type="text"
                                placeholder="Street"
                                label="Street"
                                value={order.address.street}
                                onChange={handleAddressChange}
                                fullWidth
                            />
                        </div>
                        <div className="my-4">
                            <TextInput
                                name="city"
                                type="text"
                                placeholder="City"
                                label="City"
                                value={order.address.city}
                                onChange={handleAddressChange}
                                fullWidth
                            />
                        </div>
                        <TextInput
                            name="zip"
                            type="text"
                            placeholder="Zip Code"
                            label="Zip Code"
                            value={order.address.zip}
                            onChange={handleAddressChange}
                            fullWidth
                        />
                        <div className="my-4">
                            <TextInput
                                name="country"
                                type="text"
                                placeholder="Country"
                                label="Country"
                                value={order.address.country}
                                onChange={handleAddressChange}
                                fullWidth
                            />
                        </div>
                    </article>
                </section>
            </form>
        </PageCard>
    );
}
