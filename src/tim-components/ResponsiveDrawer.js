import React from 'react';
import { connect } from 'react-redux'
import { toggleDrawer } from '../redux-store/actions/drawer';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { drawerWidth } from '../configs/app-constants';
import SearchDialog from './../search-components/SearchDialog';



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {

        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,

    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    outlinedPrimary: {
        color: 'white',
        borderColor: 'white'

    }

}));

const iconStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.primary.main,
        height: "10vh",

        backgroundColor: theme.palette.primary.main,
        margin: "0 auto"
    },
    selected: {
        border: `3px solid ${theme.palette.secondary.light}`,
    }
}))

const ResponsiveDrawer = (props) => {
    const { container } = props;
    const classes = useStyles();

    const theme = useTheme();
    const iconCss = iconStyles();

    const handleSelection = (templateName) => {
        console.log(props.currentTemplate);
        props.switchTemplate(templateName);
    }

    const isSelected = (templateName) => {
        return props.currentTemplate === templateName;
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <ListItem button key='Add Photo'>


            </ListItem>
            <ListItem button key='Search Dialog' >

                <SearchDialog />
            </ListItem>
            <ListItem button>


            </ListItem>

            <Divider />

            <Typography
                variant="h6"
                component="h2"

                gutterBottom
                color="primary"
                align="center"
            >
                Select A Template
            </Typography>




        </div>
    );
    return (

        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={props.open}
                    onClose={props.toggleDrawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    )
}
ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

const mapStateToProps = (state, ownProps) => {

    const { open } = state.drawer;
    const { container } = ownProps;

    return { open, container }
};
const mapDispatchToProps = {
    toggleDrawer,

}


export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);