import searchIndex from '../algolia';
import { UPDATE_SEARCH_RESULTS } from '../action-types';
import { updateAvailableFacets } from './available-facets';


export const updateSearchResults = (searchResults) => {
    return {
        type: UPDATE_SEARCH_RESULTS,
        payload: {
            searchResults
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