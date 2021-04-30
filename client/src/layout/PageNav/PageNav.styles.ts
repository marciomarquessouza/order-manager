import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        avatarStyle: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
        },
    });
});
