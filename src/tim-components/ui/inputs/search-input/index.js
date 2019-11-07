import React, { useState } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import UpdateResultsButton from './update-results.button';
import { search, updateSearchTerm } from '../../../../redux-store/actions/recipes';
import FilterButtons from '../../buttons/filter-buttons';

const useStyles = makeStyles(theme => ({
    root: {
        width: "70vw",
        padding: "1rem",
        [theme.breakpoints.down('sm')]: {
            width: "90vw"
        },


    },

    wrapper: {
        backgroundColor: "white",
        position: "sticky",
        top: theme.spacing(7),
        "zIndex": "5",
        [theme.breakpoints.down('sm')]: {
            width: "90vw"
        },
    }
}))

const SearchInput = (props) => {


    const classes = useStyles();
    const [query, setQuery] = useState('');
    const { search, selectedFacets, updateSearchTerm } = props;
    const handleInputChange = (event) => {
        setQuery(event.target.value);
        updateSearchTerm(query)
    }

    const fetchNewResults = () => {
        search(query, selectedFacets);
    }



    return (

        <div className={classes.wrapper}>
            <Paper className={classes.root}>
                <TextField
                    id="standard-full-width"
                    label="Search"

                    placeholder="Enter Search Term"
                    value={query}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <UpdateResultsButton getResults={fetchNewResults} />
            </Paper>
            <FilterButtons />

        </div>
    );
}

const mapStateToProps = (state) => {
    const { selectedFacets } = state;
    return {
        selectedFacets
    }
}

const mapDispatchToProps = {
    search,
    updateSearchTerm
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);