import { adverts, initialState } from './reducers';
import { ADVERTS_CREATED_SUCCESS, ADVERTS_LOADED_SUCCESS } from './types';

describe('adverts', () => {
    test('should manage ANY action', () => {
        const state = initialState.adverts;
        const action = { type: 'ANY' }
        const nextState = adverts(state, action)
        expect(nextState).toBe(state);
    });
    test('should manage ADVERTS_LOADED_SUCCESS action', () => {
        const state = initialState.adverts;
        const action = { type: ADVERTS_LOADED_SUCCESS, payload: []}
        const expectedState = {
            ...initialState.adverts, 
            loaded:true, 
            data: action.payload
        };
        const nextState = adverts(state, action)
        expect(nextState).toEqual(expectedState);
    });
    test('should mange ADVERTS_CREATED_SUCCESS action', () => {
        const state = initialState.adverts;
        const action = { type : ADVERTS_CREATED_SUCCESS, payload: [] }
        const expectedState = {
            ...initialState.adverts, 
            data: [...state.data, action.payload]
        };
        const nextState = adverts(state, action);
        expect(nextState).toEqual(expectedState)
    });
});