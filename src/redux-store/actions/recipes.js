import searchIndex from '../algolia';
import {
    UPDATE_SEARCH_RESULTS,
    UPDATE_SEARCH_TERM,
    UPDATE_FACET_FILTERS
} from '../action-types';
import { updateAvailableFacets } from './available-facets';


export const updateSearchResults = (searchResults) => {
    return {
        type: UPDATE_SEARCH_RESULTS,
        payload: {
            searchResults
        }
    }
}

export const updateSearchTerm = (searchTerm) => {
    return {
        type: UPDATE_SEARCH_TERM,
        payload: { searchTerm }
    }
}

export const updateFacetFilters = (facetFilters) => {
    return {
        type: UPDATE_FACET_FILTERS,
        payload: {
            facetFilters
        }
    }
}

export const search = (queryString = '', facetFilters = []) => async (dispatch) => {

    try {
        const searchResults = await searchIndex.search({
            query: queryString,
            facets: ['*'],
            facetFilters

        })

        console.log(searchResults);


        dispatch(updateSearchResults(searchResults));
        dispatch(updateAvailableFacets(searchResults.facets));


    }

    catch (error) {

    }

}