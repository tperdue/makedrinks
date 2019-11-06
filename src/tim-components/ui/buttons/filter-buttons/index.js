import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CategoryFilterDialog from '../../alerts-dialogs/CategoryFilter';
import GlassTypeFilterDialog from '../../alerts-dialogs/GlassTypeFilter';
import IngredientsFilterDialog from '../../alerts-dialogs/IngredientsFilter';

const useButtonSytles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
    },
    groupedTextSecondary: {
        color: 'white'
    },

    buttonGroup: {
        display: "flex",
        width: "70vw",
        [theme.breakpoints.down('sm')]: {

            width: "90vw"
        }
    }
}))


const FilterButtonGroup = () => {

    const buttonCss = useButtonSytles();

    return (

        <div className={buttonCss.buttonGroup}>

            <CategoryFilterDialog />
            <GlassTypeFilterDialog />
            <IngredientsFilterDialog />
        </div>


    )

}


const mapStateToProps = (state) => {

    return state;
}


const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(FilterButtonGroup)

