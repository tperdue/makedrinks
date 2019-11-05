import { createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';

const theme = createMuiTheme({
    palette: {
        primary: deepOrange,
        secondary: {
            main: '#FFC107',
        },
    },
});


export default theme;