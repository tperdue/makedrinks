import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { addFacet } from '../../../redux-store/actions/selected-facets'
import TextField from '@material-ui/core/TextField';
import FacetResult from '../data-display/facet-result';


const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),

    },

    closeButton: {
        justifySelf: "end",

    }
}));


const useButtonSytles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        flex: "1",
        borderRadius: 0,
        borderRight: "1px solid black"
    },
    groupedTextSecondary: {
        color: 'white'
    }
}))

const useSearchInputStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'white',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(1),
        flex: 1
    }
}))


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CategoryFilterDialog = (props) => {
    const { categoryFacets, selectedFacets } = props
    const classes = useStyles();
    const searchInputClasses = useSearchInputStyles();
    const [open, setOpen] = React.useState(false);
    const [filterText, setFilterText] = useState('');
    const availableFacets = Object.keys(categoryFacets)
        .map(categoryKey => {
            const value = categoryFacets[categoryKey];
            return {
                name: categoryKey,
                searchKey: `category:${categoryKey}`,
                value
            }
        })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCategoryInput = (event) => {
        setFilterText(event.target.value);
    }

    const buttonCss = useButtonSytles()

    const isSelected = (searchKey) => {
        return selectedFacets.includes(searchKey);
    }

    return (
        <>
            <Button
                className={buttonCss.root}
                onClick={handleClickOpen}
                fullWidth={true}
                variant="text"
            >Categories</Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Category Filter
                        </Typography>

                        <TextField
                            id="category-search"
                            placeholder="Search for Category"
                            className={searchInputClasses.root}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={filterText}
                            onChange={handleCategoryInput}
                        />


                    </Toolbar>
                </AppBar>
                <List>

                    {availableFacets
                        .filter(facet => {
                            const subjectString = facet.name.toLowerCase();
                            const testString = filterText.toLowerCase();
                            return subjectString.includes(testString);
                        })
                        .map(facet => {
                            return (

                                <FacetResult
                                    key={facet.name}
                                    facetInfo={facet}
                                    selected={isSelected(facet.searchKey)}
                                />
                            )
                        })}



                </List>
            </Dialog>
        </>
    );
}

const mapStateToProps = (state) => {
    const { category } = state.availableFacets;
    const { selectedFacets } = state;

    return {
        categoryFacets: category,
        selectedFacets
    }
}

const mapDispatchToProps = {
    addFacet
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilterDialog);