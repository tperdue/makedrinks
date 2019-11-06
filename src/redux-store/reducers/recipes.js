import {
    UPDATE_SEARCH_RESULTS,
    UPDATE_SEARCH_TERM
} from '../action-types'

const initialState = {
    results: [],
    search: {
        query: '',
        facetFilers: []
    },
    nbHits: 0,
    nbPages: 0,
    page: 0



}


export default (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_SEARCH_RESULTS: {
            const { hits, nbPages, page, nbHits } = action.payload.searchResults;

            return {
                ...state,
                results: hits,
                nbPages,
                page,
                nbHits

            }
        }

        default:
            return state;
    }
}