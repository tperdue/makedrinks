import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: {
            main: '#FFC107',
        },
    },
});


export default theme;