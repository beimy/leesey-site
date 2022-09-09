import {
    TEST,
    TOGGLE_ERROR_MODAL,
    CHANGE_DISPLAY_COCKTAIL
} from './actions';
import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        case TEST :
            return {
                ...state,
                test: 'test changed'
            };
        case TOGGLE_ERROR_MODAL :
            return {
                ...state,
                errorModalOpen: !state.errorModalOpen
            };
        case CHANGE_DISPLAY_COCKTAIL :
            return {
                ...state,
                display_cocktail: action.new_display_cocktail
            };
        default: 
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}