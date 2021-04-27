import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { signOut } from '../../services';
import { PageNav } from '../../layout/PageNav';
import { useAppSelector } from '../../hooks';
import { OrderList } from './OrderList.page';

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
                <Route path="/add-number">
                    <div>Create Order</div>
                </Route>
                <Route path="/">
                    <OrderList />
                </Route>
            </Switch>
        </>
    );
}
