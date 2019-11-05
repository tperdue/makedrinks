import searchIndex from '../algolia';
import { UPDATE_SEARCH_RESULTS } from '../action-types';


export const updateSearchResults = (searchResults) => {
    return {
        type: UPDATE_SEARCH_RESULTS,
        payload: {
            searchResults
        }
    }
}

export const search = (queryString = '') => async (dispatch) => {

    try {
        const searchResults = await searchIndex.search({
            query: queryString,
            facets: ['*'],

        })

        dispatch(updateSearchResults(searchResults));


    }

    catch (error) {

    }

}