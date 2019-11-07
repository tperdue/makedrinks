import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';

const useButtonStyles = (makeStyles(theme => ({
    root: {
        position: "absolute",
        right: theme.spacing(2),
        top: theme.spacing(4)
    }
})))
const UpdateResultsButton = ({ getResults }) => {
    const classes = useButtonStyles();
    const handleClick = () => {
        getResults();
    }
    return (

        <Tooltip title="Update Results" aria-label="update results">
            <IconButton
                color="primary"
                className={classes.root}
                aria-label="Update Results"
                onClick={handleClick}
            >
                <RefreshIcon />
            </IconButton>

        </Tooltip>

    )



}


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateResultsButton);