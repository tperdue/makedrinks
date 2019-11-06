import { combineReducers } from 'redux';
import drawer from './drawer';
import user from './user';
import fullScreenDialog from './full-screen-dialog';
import alertDialogs from './alerts-dialogs';
import recipes from './recipes';
import availableFacets from './available-facets';
import selectedFacets from './selected-facets';


export default combineReducers({
    drawer,
    user,
    fullScreenDialog,
    alertDialogs,
    recipes,
    availableFacets,
    selectedFacets

})