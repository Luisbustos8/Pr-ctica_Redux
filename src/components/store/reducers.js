import {combineReducers} from 'redux';

import { 
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_SUCCESS, 
    AUTH_LOGOUT, 
    ADVERTS_LOADED, 
    ADVERTS_CREATED,
    UI_RESET_ERROR,
} from './types';


const initialState = {
    auth: false,
    adverts: [],
    UI: {
        loading: false,
        error: null, 
    }
};

export function auth(state=initialState.auth, action) {
      switch (action.type) {
        case AUTH_LOGIN_SUCCESS:
            return true;
        case AUTH_LOGOUT:
            return false;
        default:
           return state;
    };
};

export function adverts(state=initialState.adverts, action) {
      switch (action.type) {
        case ADVERTS_LOADED:
            return action.payload.adverts 
        case ADVERTS_CREATED:
            return [...state.adverts, action.payload.advert]
        default:
           return state;
    };
};

export function ui (state = initialState, action){
    if (action.error) {
        return { ...state, loading:false, error: action.error}
    };
    switch (action.type) {
        case AUTH_LOGIN_REQUEST:
            return { ...state, loading:true, error:null };
        
        case AUTH_LOGIN_SUCCESS:
            return { ...state, loading:false};
        
        case UI_RESET_ERROR:
            return {
                ...state,
                error: null,
            }
            
        default:
            return state;
    };
};

