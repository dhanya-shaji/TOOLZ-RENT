import { takeEvery,put, call } from 'redux-saga/effects';
import {LoginAction} from '../Actions/index';
import {get, change,countvalue} from '../Apis/Apimethod'; 
function* Loginrequest(action){
    console.log("haiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    const loginresponse = yield call(get,
        '&Username='+action.payload.Username+
        '&Password='+action.payload.Password);
    const response=loginresponse.response;
            console.log('loginRes',loginresponse.resultCode)
            if(response.resultCode===0){
                yield put(LoginAction.Loginfail(response))
            }else{
                yield put(LoginAction.Loginsucess(response))
            }
        }
        
        function* changePassword(action){
            const changeresponse = yield call(change,
                '&Password='+action.payload.Password+'&Username='+action.payload.Username);
            const response=changeresponse.response;
            yield put(LoginAction.changePasswordSuccess(response))

        }
        //count
        function* Countrequest(){
            const Countresponse = yield call(countvalue);
            const response=Countresponse.response;
            console.log("responce",Countresponse);
            yield put(LoginAction.Countsucess(response))

        }
export default function* LoginSaga(){
    yield takeEvery(LoginAction.LOGIN_REQUEST,Loginrequest);
    yield takeEvery(LoginAction.CHANGE_PASSWORD,changePassword);
    yield takeEvery(LoginAction.COUNT_REQUEST,Countrequest);
    
}

