
import { 
    AUTH_LOGOUT,
     ADVERTS_LOADED_REQUEST,
     ADVERTS_LOADED_SUCCESS,
     ADVERTS_LOADED_FAILURE, 
     ADVERTS_TAGS_REQUEST,
     ADVERTS_TAGS_SUCCESS,
     ADVERTS_TAGS_FAILURE,
     AUTH_LOGIN_REQUEST, 
     AUTH_LOGIN_SUCCESS, 
     AUTH_LOGIN_FAILURE, 
     UI_RESET_ERROR,
     ADVERTS_CREATED_REQUEST,
     ADVERTS_CREATED_SUCCESS,
     ADVERTS_CREATED_FAILURE,
     ADVERTS_DELETED_FAILURE,
     ADVERTS_DELETED_SUCCESS,
     ADVERTS_DELETED_REQUEST,
     ADVERT_DETAIL_FAILURE,
     ADVERT_DETAIL_REQUEST,
     ADVERT_DETAIL_SUCCESS
    } from './types';

export const authLoginRequest = () => {
    return {
        type: AUTH_LOGIN_REQUEST,
    };
};
export const authLoginSuccess = () => {
    return {
        type: AUTH_LOGIN_SUCCESS,
    };
};
export const authLoginFailure = error => {
    return {
        type: AUTH_LOGIN_FAILURE,
        payload: error,
        error: true,
    };
};

export const loginAction = (credentials) => {
    return async function(dispatch, getState, {api, history}){
        dispatch(authLoginRequest());
        try {
            await api.auth.login(credentials);
            dispatch(authLoginSuccess())
            const {from} = history.location.state || { from : { pathname: '/' } }
            history.replace(from)
        } catch (error) {
            dispatch(authLoginFailure(error))
        };
    }
  };


export const authLogout = () => {
    return {
        type: AUTH_LOGOUT,
    };
};

export const advertsLoadedRequest = () => {
    return {
        type: ADVERTS_LOADED_REQUEST,
    };
};

export const advertsLoadedSuccess = adverts => {
    return {
        type: ADVERTS_LOADED_SUCCESS,
        payload: adverts,      
    };
};  
export const advertsLoadedFailure = error => {
    return {
        type: ADVERTS_LOADED_FAILURE,
        payload: error,
        error: true,
    }
};

export const advertsLoadAction = () => {
    return async function(dispatch, getState, {api}) {
        dispatch(advertsLoadedRequest())
        try {
            const adverts = await api.adverts.getAdverts();
            dispatch(advertsLoadedSuccess(adverts))
        } catch (error) {
            dispatch(advertsLoadedFailure(error))
        }
    };
};

export const advertsTagsRequest = () => {
    return{
        type: ADVERTS_TAGS_REQUEST,
    }
};
export const advertsTagsSuccess = tags => {
    return {
        type: ADVERTS_TAGS_SUCCESS,
        payloads: tags,
    }
};
export const advertsTagsFailure = error => {
    return {
        type: ADVERTS_TAGS_FAILURE,
        payload: error,
        error: true
    }
};

export const advertsTagsAction = () => {
    return async function(dispatch, getState, {api}) {
        dispatch(advertsTagsRequest())
        try {
            const tags = await api.adverts.getTags();
            dispatch(advertsTagsSuccess(tags))
        } catch (error) {
            dispatch(advertsTagsFailure(error))
        };
    };
};

export const advertsCreatedRequest = () => {
    return {
        type: ADVERTS_CREATED_REQUEST,
    };
};

export const advertsCreatedSuccess = advert => {
    return {
        type: ADVERTS_CREATED_SUCCESS,
        payload: advert,
    };
};

export const advertsCreatedFailure = error => {
    return {
        type: ADVERTS_CREATED_FAILURE,
        payload: error,
        error: true,
    };
};

export const advertsCreatedAction = advert => {
    return async function(dispatch, getState, {api, history}) {
        dispatch(advertsCreatedRequest())
        try {
            const createdAdvert = await api.adverts.createAdvert(advert);
            dispatch(advertsCreatedSuccess(createdAdvert))
            console.log(createdAdvert)
            history.push('/adverts')
            return createdAdvert
        } catch (error) {
            dispatch(advertsCreatedFailure(error))
        }
    };
};

export const advertsDetailRequest = () => {
    return {
        type: ADVERT_DETAIL_REQUEST,
    };
};

export const advertsDetailSuccess = id => {
    return {
        type: ADVERT_DETAIL_SUCCESS,
        payload: id,
    };
};

export const advertsDetailFailure = error => {
    return {
        type: ADVERT_DETAIL_FAILURE,
        payload: error,
        error: true,
    };
};

export const advertsDetailAction = id => {
    return async function(dispatch, getState, {api, history}) {
        dispatch(advertsDetailRequest())
        try {
            const advertDetail = await api.adverts.getAdvert(id);
            dispatch(advertsDetailSuccess(advertDetail))
            history.push('/adverts/' + id)
        } catch (error) {
            dispatch(advertsDetailFailure(error))
        }
    };
};




export const advertsDeletedRequest = () => {
    return {
        type: ADVERTS_DELETED_REQUEST,
    };
};

export const advertsDeletedSuccess = id => {
    return {
        type: ADVERTS_DELETED_SUCCESS,
        payload: id,
    };
};

export const advertsDeletedFailure = error => {
    return {
        type: ADVERTS_DELETED_FAILURE,
        payload: error,
        error: true,
    };
};

export const advertsDeletedAction = id => {
    return async function(dispatch, getState, {api, history}) {
        dispatch(advertsDeletedRequest())
        try {
            const deletedAdvert = await api.adverts.deleteAdvert(id);
            dispatch(advertsDeletedSuccess(deletedAdvert))
            history.push('/')
        } catch (error) {
            dispatch(advertsDeletedFailure(error))
        }
    };
};


export const resetError = () => {
    return {
        type: UI_RESET_ERROR,
    }
};