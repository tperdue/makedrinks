import { ADD_FACET } from '../action-types';


const initialState = []







export default (state = initialState, action) => {


    switch (action.type) {

        case ADD_FACET: {
            const { facetSearchKey } = action.payload

            return state.includes(facetSearchKey) ? state : state.concat(facetSearchKey);



        }

        default:
            return state
    }
}