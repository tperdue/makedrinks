import {
    ADD_FACET,
    REMOVE_FACET
} from '../action-types';

import store from '../store';
import { updateFacetFilters, search } from './recipes'

export const addFacet = (facetSearchKey) => {
    return {
        type: ADD_FACET,
        payload: {
            facetSearchKey
        }
    }
}


export const removeFacet = (facetSearchKey) => {
    return {
        type: REMOVE_FACET,
        payload: {
            facetSearchKey
        }
    }
}


export const removeFacetAndSearch = (facetSearchKey) => async dispatch => {

    dispatch(removeFacet(facetSearchKey));
    dispatch(updateFacetFilters(store.getState().selectedFacets))
    const { query, facetFilters } = store.getState().recipes.search
    dispatch(search(query, facetFilters));

}



export const addFacetAndSearch = (facetSearchKey) => async dispatch => {

    dispatch(addFacet(facetSearchKey));
    dispatch(updateFacetFilters(store.getState().selectedFacets))
    const { query, facetFilters } = store.getState().recipes.search
    dispatch(search(query, facetFilters));

}

