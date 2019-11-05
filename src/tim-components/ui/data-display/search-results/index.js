import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { search } from '../../../../redux-store/actions/recipes';
import RecipeCard from '../recipe-card';

const useGridStyles = makeStyles(theme => ({
    root: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridColumnGap: "1rem",
        "paddingTop": "2rem",
        "paddingBottom": "2rem",
        width: "70vw"
    }
}))


const SearchResults = (props) => {
    const { search } = props;
    const { recipes } = props;
    const gridCss = useGridStyles();


    const performSearch = () => {
        search();
    }

    const showRecipes = (results) => {
        return (

            results.map(recipe => (
                <RecipeCard recipeInfo={recipe} key={recipe.id} />
            ))

        )
    }
    useEffect(performSearch, []);



    return (
        <div className={gridCss.root}>
            {showRecipes(recipes.results)}
        </div>
    )

}


const mapStateToProps = (state) => {

    const { recipes } = state;
    return {
        recipes
    }
}

const mapDispatchToProps = {
    search
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)