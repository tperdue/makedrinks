import { UPDATE_AVAILABLE_FACETS } from '../action-types';

export const updateAvailableFacets = (facets) => {
    return {
        type: UPDATE_AVAILABLE_FACETS,
        payload: {
            facets
        }
    }
}