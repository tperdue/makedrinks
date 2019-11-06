import {
    ADD_FACET
} from '../action-types';

import store from '../store';

export const addFacet = (facets) => dispatch => {

    dispatch(() => {
        return {
            type: ADD_FACET,
            payload: {
                facets
            }
        }
    })

    console.log(store.getState());

}