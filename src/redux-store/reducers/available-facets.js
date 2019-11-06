import { UPDATE_AVAILABLE_FACETS } from '../action-types';


const initialState = {
    alcoholicType: {},
    category: {},
    glassType: {},
    ingredients: {}
}





export default (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_AVAILABLE_FACETS: {
            return action.payload.facets;
        }
        default:
            return state;
    }

}