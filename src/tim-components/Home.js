import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchInput from './ui/inputs/search-input/index';
import SearchResults from './ui/data-display/search-results';





const userStyles = makeStyles(theme => ({

}));





const Home = (props) => {
    const classes = userStyles();

    return (

        <>

            <SearchInput />

            <SearchResults />

        </>
    )
};


export default Home;