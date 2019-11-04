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
import AddPhoto from './../reena-compononents/Addphoto';
import { ReactComponent as TemplateIcon } from '../Assets/Template.svg';
import { ReactComponent as TemplateIcon2 } from '../Assets/Template2.svg';
import { ReactComponent as TemplateIcon3 } from '../Assets/Template3.svg';
import { ReactComponent as TemplateIcon4 } from '../Assets/Template4.svg';
import { switchTemplate } from '../redux-store/actions/template';
import SearchDialog from './../search-components/SearchDialog';
import ManageBoardsDialog from '../tim-components/ui/alerts-dialogs/ManageBoards';


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

                <AddPhoto />
            </ListItem>
            <ListItem button key='Search Dialog' >

                <SearchDialog />
            </ListItem>
            <ListItem button>

                <ManageBoardsDialog />
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

            <ListItem button
                alignItems="center"
                onClick={() => handleSelection('template1')}>

                <TemplateIcon
                    className={`${iconCss.root} ${isSelected('template1') ? iconCss.selected : ''}`}

                />
            </ListItem>

            <ListItem button onClick={() => handleSelection('template2')}>

                <TemplateIcon2
                    className={`${iconCss.root} ${isSelected('template2') ? iconCss.selected : ''}`}

                />
            </ListItem>

            <ListItem button onClick={() => handleSelection('template3')}>

                <TemplateIcon3
                    className={`${iconCss.root} ${isSelected('template3') ? iconCss.selected : ''}`}

                />
            </ListItem>

            <ListItem button onClick={() => handleSelection('template4')}>

                <TemplateIcon4
                    className={`${iconCss.root} ${isSelected('template4') ? iconCss.selected : ''}`}

                />
            </ListItem>


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
    const { template } = state;
    return { open, container, currentTemplate: template.current }
};
const mapDispatchToProps = {
    toggleDrawer,
    switchTemplate
}


export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);