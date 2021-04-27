import React from 'react';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { ITableProps } from './Table.props';
import { useStyles } from './Table.styles';
import { LinearProgress } from '@material-ui/core';

export function Table({
    rows,
    columns,
    onClick,
    isLoading = false,
    testId = 'table-component',
}: ITableProps) {
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);
    const classes = useStyles();

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleOnClick = (
        event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
        code: string,
    ) => {
        event.preventDefault();
        onClick(code);
    };

    return (
        <div data-testid={testId}>
            <TableContainer>
                <MaterialTable stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    className={classes.tableHeadStyle}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {isLoading ? (
                            <div>
                                <LinearProgress color="secondary" />
                            </div>
                        ) : (
                            rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={`${row.code}`}
                                            onClick={(event) => handleOnClick(event, `${row.code}`)}
                                        >
                                            {columns.map((column) => {
                                                const rowValue = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {rowValue}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })
                        )}
                    </TableBody>
                </MaterialTable>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
}
