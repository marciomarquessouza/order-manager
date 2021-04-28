import React, { useCallback } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { signOut } from '../../services';
import { PageNav } from '../../layout/PageNav';
import { useAppSelector } from '../../hooks';
import { OrderList } from './OrderList.page';
import { OrderForm } from './OrderForm.page';
import { OrderDetail } from './OrderDetail.page';
import { ORDER_CREATE, ORDER_DETAIL, ORDER_LIST } from '../../routes';

export function Order() {
    const { user } = useAppSelector((state) => state.auth);
    const history = useHistory();

    const handleClickLogo = useCallback(() => {
        history.push(ORDER_LIST);
    }, [history]);

    return (
        <>
            <PageNav
                email={user.email}
                name={user.name}
                onClickAvatar={signOut}
                onClickLogo={handleClickLogo}
            />
            <Switch>
                <Route path={ORDER_DETAIL}>
                    <OrderDetail />
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
