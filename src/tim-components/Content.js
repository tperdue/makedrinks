import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const userStyles = makeStyles(theme => ({
    content: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        paddingTop: theme.spacing(10),
        // padding: 
    },
}));



const Content = (props) => {
    const classes = userStyles();
    return (
        <main className={classes.content}>

            {props.children}
        </main>

    )
}

export default Content;