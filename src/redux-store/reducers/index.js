import { combineReducers } from 'redux';
import drawer from './drawer';
import user from './user';
import fullScreenDialog from './full-screen-dialog';
import board from './board';
import alertDialogs from './alerts-dialogs';


export default combineReducers({
    drawer,
    user,
    fullScreenDialog,
    board,
    alertDialogs,

})