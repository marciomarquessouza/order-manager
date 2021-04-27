import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        pageHeaderStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            color: theme.palette.primary.dark,
            marginLeft: 12,
        },
    });
});
