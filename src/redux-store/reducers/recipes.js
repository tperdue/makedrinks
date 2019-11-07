import {
    UPDATE_SEARCH_RESULTS,
    UPDATE_SEARCH_TERM,
    UPDATE_FACET_FILTERS
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

        case UPDATE_SEARCH_TERM: {
            return {
                ...state,
                search: {
                    query: action.payload.searchTerm,
                    facetFilers: state.search.facetFilers
                }
            }
        }

        case UPDATE_FACET_FILTERS: {
            const { facetFilters } = action.payload;
            return {
                ...state,
                search: {
                    query: state.search.query,
                    facetFilters
                }
            }
        }

        default:
            return state;
    }
}