import { createMuiTheme } from '@material-ui/core/styles';
export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#F2F8F1',
            main: '#56A086',
            dark: '#3C7257',
        },
        secondary: {
            light: '#0091B9',
            main: '#0091B9',
            dark: '#0091B9',
        },
    },
    typography: {
        fontFamily: "'Kanit', 'Roboto', 'Arial', sans-serif",
    },
});
