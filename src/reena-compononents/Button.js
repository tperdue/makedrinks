import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SaveBoardButton from '../tim-components/ui/buttons/save-board';
import ClearBoardButton from '../tim-components/ui/buttons/clear-board';
import '../CSS/Button.css'




const buttonContainerStyles = makeStyles(theme => ({

  root: {
    backgroundColor: theme.palette.secondary.light,
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    textAlign: 'center',

    width: "80vw",

    [theme.breakpoints.up('md')]: {
      width: "50vw"
    }
  }


}));







export default function ContainedButtons(props) {

  const buttonCss = buttonContainerStyles();

  return (

    <div className={buttonCss.root}>


      <SaveBoardButton />
      <ClearBoardButton />


    </div>
  );
}