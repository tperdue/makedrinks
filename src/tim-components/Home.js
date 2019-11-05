import React from 'react';
import { makeStyles } from '@material-ui/core/styles';




const userStyles = makeStyles(theme => ({
    content: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        height: "100vh",
        justifyContent: "center",
        paddingTop: "5rem",
        padding: theme.spacing(3),
    }

}));





const Home = (props) => {
    const classes = userStyles();

    return (
        <div className={classes.content} style={{ backgroundColor: "#transparent" }}>

        </div>

    )
};


export default Home;