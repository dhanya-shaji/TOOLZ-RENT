import { fork, all } from 'redux-saga/effects';

import LoginSaga from './LoginSaga';
import CustomerSaga from './CustomerSaga'
import ToolsSaga from './ToolsSaga'
import RentSaga from './RentSaga'
import RentItemSaga from './RentItemSaga'
 
export default function* sagas(){
    yield all([fork(LoginSaga)]);
    yield all([fork(CustomerSaga)]);
    yield all([fork(ToolsSaga)]);
    yield all([fork(RentSaga)]);
    yield all([fork(RentItemSaga)]);

}