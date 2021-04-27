import React from 'react';
import { DatePicker } from '../../components/DatePicker';
import { TextInput } from '../../components/TextInput';
import { IPageOrderDetailProps } from './PageOrderDetail.props';
import { Card, CardHeader, Avatar, Typography } from '@material-ui/core';
import { Business, Person } from '@material-ui/icons';
import { useStyles } from './PageOrderDetail.style';
import { PageCard } from '../PageCard';

export function PageOrderDetail({
    order,
    title,
    onTitleChange,
    bookingDate,
    onBookingDateChange,
}: IPageOrderDetailProps) {
    const classes = useStyles();

    return (
        <PageCard title="Order Detail">
            <section className="flex flex-col max-w-xs m-6">
                <TextInput
                    type="text"
                    placeholder="Order Title"
                    label="Title"
                    value={title}
                    onChange={onTitleChange}
                    required
                />
                <DatePicker
                    value={bookingDate}
                    onChange={onBookingDateChange}
                    label="Booking Date"
                    required
                />
            </section>
            <section className="max-w-sm m-6">
                <header className="flex items-center my-4">
                    <Person fontSize="small" color="primary" />
                    <span className={classes.pageTitleStyle}>Customer</span>
                </header>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar className={classes.avatarStyle}>
                                {order.customer.name.substring(0, 1).toUpperCase()}
                            </Avatar>
                        }
                        title={order.customer.name}
                        subheader={
                            <>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {order.customer.phone}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {order.customer.email}
                                </Typography>
                            </>
                        }
                    />
                </Card>
            </section>
            <section className="max-w-sm m-6">
                <header className="flex items-center my-4">
                    <Business fontSize="small" color="primary" />
                    <span className={classes.pageTitleStyle}>Address</span>
                </header>
                <article className="mx-4">
                    <Typography variant="body2" color="textSecondary" component="p">
                        {order.address.street}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {`${order.address.city} - ${order.address.zip}`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {order.address.country}
                    </Typography>
                </article>
            </section>
        </PageCard>
    );
}
