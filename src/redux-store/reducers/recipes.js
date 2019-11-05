import {
    UPDATE_SEARCH_RESULTS,
    UPDATE_SEARCH_TERM
} from '../action-types'

const initialState = {
    results: [],
    searchTerm: '',
    facets: {

    },
    page: 0,
    nbPages: 0,
    nbHits: 0


}


export default (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_SEARCH_RESULTS: {
            const { facets, hits, nbPages, page, nbHits } = action.payload.searchResults;

            return {
                ...state,
                results: hits,
                facets,
                nbPages,
                page,
                nbHits
            }
        }

        default:
            return state;
    }
}