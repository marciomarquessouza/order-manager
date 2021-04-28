import React, { useCallback } from 'react';
import { Card, CardContent, CardHeader, Paper } from '@material-ui/core';
import { IPageCardProps } from './PageCard.props';
import { useStyles } from './PageCar.styles';
import { Button } from '../../components/Button';
import { ArrowBack } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { ORDER_LIST } from '../../routes';

export function PageCard({ title, children }: IPageCardProps) {
    const classes = useStyles();
    const history = useHistory();

    const handleReturn = useCallback(() => {
        history.push(ORDER_LIST);
    }, [history]);

    return (
        <Paper>
            <Card>
                <CardHeader
                    className="bg-green-50"
                    title={<p className={classes.pageHeaderStyle}>{title}</p>}
                    action={
                        <div>
                            <ArrowBack fontSize="small" color="primary" />
                            <Button variant="text" onClick={handleReturn}>
                                RETURN
                            </Button>
                        </div>
                    }
                />
                <CardContent>{children}</CardContent>
            </Card>
        </Paper>
    );
}
