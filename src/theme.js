import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';

const theme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: {
            main: '#009688',
        },
    },
});


export default theme;