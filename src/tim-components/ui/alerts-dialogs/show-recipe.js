import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    listHeader: {
        marginLeft: theme.spacing(2),
        fontSize: "1rem",
        fontWeight: "700"
    },

    textBody: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    }


}))
const ShowRecipe = ({ recipeInfo, open }) => {

    const [isOpen, setOpen] = useState(open);
    const cssStyles = useStyles();
    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = () => {
        setOpen(true);
    }

    return (


        <>
            <IconButton

                aria-label="show more"
                onClick={handleClick}
            >
                <LaunchIcon />
            </IconButton>

            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={isOpen}>
                <DialogTitle id="simple-dialog-title">{recipeInfo.name}</DialogTitle>


                <List>
                    {
                        recipeInfo.ingredientsList
                            .filter(item => item)
                            .filter(item => !item.includes("null"))
                            .filter(item => !item.includes("undefined"))
                            .map((item, index) => {
                                return (
                                    <div key={index}>
                                        <ListItem key={index}>
                                            <ListItemText primary={item} />
                                        </ListItem>
                                        <Divider />
                                    </div>
                                )
                            })
                    }
                </List>

                <Typography variant="inherit" align="left" className={cssStyles.listHeader}>
                    Directions:
                </Typography>

                <p className={cssStyles.textBody}>
                    {recipeInfo.instructions}
                </p>

            </Dialog>

        </>
    )
}

export default ShowRecipe