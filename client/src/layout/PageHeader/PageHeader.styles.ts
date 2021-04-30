import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        headerContainer: {
            background: `linear-gradient(89.97deg, ${theme.palette.primary.dark} 0.65%, ${theme.palette.primary.main} 99.97%), #C4C4C4`,
            height: 175,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    });
});
