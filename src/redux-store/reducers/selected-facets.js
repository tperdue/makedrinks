import { ADD_FACET, REMOVE_FACET } from '../action-types';


const initialState = []







export default (state = initialState, action) => {


    switch (action.type) {

        case ADD_FACET: {
            const { facetSearchKey } = action.payload
            console.log(facetSearchKey)

            return state.includes(facetSearchKey) ? state : state.concat(facetSearchKey);
        }

        case REMOVE_FACET: {
            const { facetSearchKey } = action.payload;
            const updatedSelectedFacets = state.filter(searchKey => searchKey !== facetSearchKey);
            return updatedSelectedFacets;
        }

        default:
            return state
    }
}