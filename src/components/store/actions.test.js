import { authLoginRequest, advertsLoadedSuccess, loginAction } from './actions';
import {AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS} from './types';


// TEST FUNCIÓN SÍNCRONA -->
describe('authLoginRequest', () => {
    test('should return an AUTH_LOGIN_REQUEST action', ()=> {
        const result = authLoginRequest()
        expect(result).toEqual( {"type": "AUTH_LOGIN_REQUEST"} );
    });
});

// TEST FUNCIÓN ASÍNCRONA -->

describe('loginAction', () =>{
    describe('when login api resolves',() =>{
        const credentials = 'credentials';
        const action = loginAction(credentials);
        const dispatch = jest.fn();
        const getState = () => {};
        const api = {
            auth: {login: jest.fn().mockResolvedValue() },
        };
        const history = {
            location: {},
            replace: jest.fn()
        }
        test('should dispatch an AUTH_LOGIN_REQUEST acction', () => {
            action(dispatch, getState, {api, history});
            expect(dispatch).toHaveBeenCalledWith({type: AUTH_LOGIN_REQUEST});
        });

        test ('should call api.auth.login', () => {
            action(dispatch, getState, {api, history});
            expect(api.auth.login).toHaveBeenLastCalledWith(credentials);
        });

        test('should dispatch an AUTH_LOGIN_SUCCESS action', async () => {
            await action(dispatch, getState, {api, history});
            expect(dispatch).toHaveBeenNthCalledWith(2, {type: AUTH_LOGIN_SUCCESS})        
            });

        test('should redirect to /', async () => {
            await action(dispatch, getState, {api, history});
            expect(history.replace).toHaveBeenCalledWith({pathname: '/'});
        });
        
    });
});

