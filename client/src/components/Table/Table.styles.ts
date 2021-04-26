import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        tableHeadStyle: {
            backgroundColor: theme.palette.primary.light,
            fontWeight: 'bold',
        },
    });
});
