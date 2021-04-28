import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { signOut } from '../../services';
import { PageNav } from '../../layout/PageNav';
import { useAppSelector } from '../../hooks';
import { OrderList } from './OrderList.page';
import { OrderForm } from './OrderForm.page';
import { ORDER_CREATE, ORDER_DETAIL, ORDER_LIST } from '../../routes';

export function Order() {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <>
            <PageNav
                email={user.email}
                name={user.name}
                onClickAvatar={signOut}
                onClickLogo={() => undefined}
            />
            <Switch>
                <Route path={ORDER_DETAIL}>
                    <div>Order Detail</div>
                </Route>
                <Route path={ORDER_CREATE}>
                    <OrderForm />
                </Route>
                <Route path={ORDER_LIST}>
                    <OrderList />
                </Route>
            </Switch>
        </>
    );
}
