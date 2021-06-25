
import { 
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS, 
    AUTH_LOGOUT, 
    ADVERTS_LOADED_REQUEST,
    ADVERTS_LOADED_SUCCESS,
    UI_RESET_ERROR,
    ADVERTS_TAGS_REQUEST,
    ADVERTS_TAGS_SUCCESS,
    ADVERTS_CREATED_REQUEST,
    ADVERTS_CREATED_SUCCESS,
    ADVERTS_DELETED_REQUEST,
    ADVERTS_DELETED_SUCCESS,
    ADVERT_DETAIL_SUCCESS,
    ADVERT_DETAIL_REQUEST,
} from './types';


export const initialState = {
    auth: false,
    adverts: {
        loaded: false,
        data: []
    },
    tags:{
        loaded: false,
        tags: []
    },
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
        case ADVERTS_LOADED_SUCCESS:
            return {...state, loaded:true, data: [...action.payload]}
        case ADVERTS_CREATED_SUCCESS:
        case ADVERT_DETAIL_SUCCESS:
             return { ...state,  data: [...state.data, action.payload] }
        case ADVERTS_DELETED_SUCCESS:
            return { ...state, loaded: false, data: [...state.data.filter((advert) => advert.id !== action.payload)]};
        default:
           return state;
    };
};


export function advertsTags(state=initialState.tags, action){
    switch (action.type) {
        case ADVERTS_TAGS_SUCCESS: 
            return {...state, loaded: true, tags : action.payloads}
    
        default:
            return state;
    }
}

export function ui (state = initialState, action){
    if (action.error) {
        return { ...state, loading:false, error: action.error}
    };
    switch (action.type) {
        case AUTH_LOGIN_REQUEST:
        case ADVERTS_LOADED_REQUEST:
        case ADVERTS_TAGS_REQUEST:
        case ADVERTS_CREATED_REQUEST:
        case ADVERT_DETAIL_REQUEST:
        case ADVERTS_DELETED_REQUEST:
            return { ...state, loading:true, error:null };
        
        case AUTH_LOGIN_SUCCESS:
        case ADVERTS_LOADED_SUCCESS:
        case ADVERTS_TAGS_SUCCESS:
        case ADVERTS_CREATED_SUCCESS:
        case ADVERTS_DELETED_SUCCESS:
        case ADVERT_DETAIL_SUCCESS:
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

