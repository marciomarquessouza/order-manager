import React from 'react';
import { Card, CardContent, CardHeader, Paper, Typography } from '@material-ui/core';
import { IPageCardProps } from './PageCard.props';
import { useStyles } from './PageCar.styles';

export function PageCard({ title, children }: IPageCardProps) {
    const classes = useStyles();

    return (
        <Paper>
            <Card>
                <CardHeader
                    className="bg-green-50"
                    title={<p className={classes.pageHeaderStyle}>{title}</p>}
                />
                <CardContent>{children}</CardContent>
            </Card>
        </Paper>
    );
}
