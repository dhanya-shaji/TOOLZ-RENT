import {LoginAction} from '../Actions/index'

const intialState = {
    loginResponse:[],
    countResponse:[],
    loginStatus: 0,
    token: '',
    resultCode: 0,
    isLogin: false,
    error:'',
};

export default function  (state = intialState, action) {
    switch (action.type) {
        case LoginAction.LOGIN_REQUEST:
            return {
                ...state
            }
        case LoginAction.LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                loginStatus: 1,
                resultCode: 1,
                isLogin: true,
                loginResponse:action.payload,
                token:'123',
                
                
            }
        case LoginAction.LOGIN_REQUEST_FAIL:
            return {
                ...state,
                loginStatus: 2,
                resultCode: 0,
                isLogin: false,
                error:action.payload.error,
            }
    case LoginAction.CHANGE_PASSWORD:
            return{
                ...state,

            }
        case LoginAction.CHANGE_PASSWORD_SUCCESS:
            return{
                ...state,
                isPasswordChanged:1,

            }
        case LoginAction.CHANGE_PASSWORD_FAIL:
            return{
                ...state,
                isPasswordChanged:2,
                passwordChangeErrorMsg:action.payload.error,
                
            }
            //count
            case LoginAction.COUNT_REQUEST:
                return {
                    ...state
                }
            case LoginAction.COUNT_REQUEST_SUCCESS:
                return {
                    ...state,
                    countResponse:action.payload,    
                }
            case LoginAction.COUNT_REQUEST_FAIL:
                return {
                    ...state,
                    errors:action.payload.error,
                }

            default:
                return {
                    ...state
                }
    }
}