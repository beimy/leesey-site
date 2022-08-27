import {
    TEST
} from './actions';
import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        case TEST :
            return {
                ...state,
                test: 'test changed'
            };
        default: 
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}