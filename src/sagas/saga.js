import {takeEvery, put, delay} from 'redux-saga/effects';

function* ageUpAsync(){
    yield delay(4000);
    yield put ({type:'AGE_UP_FROM_SAGA', value :4})
}

export function* watchAgeUp(){

    yield takeEvery('AGE_UP_TEST', ageUpAsync);


}