import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: "70vw",
        padding: "1rem",
        [theme.breakpoints.down('sm')]: {
            width: "90vw"
        }
    }
}))

const SearchInput = () => {

    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <TextField
                id="standard-full-width"
                label="Search"

                placeholder="Enter Search Term"

                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Paper>
    );
}

export default SearchInput;