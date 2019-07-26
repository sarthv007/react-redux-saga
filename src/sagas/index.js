import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchPost() {
  const json = yield fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json(), );  
   
  yield put({ type: "POSTS_RECEIVED", posts: json });
  
}


function* actionWatcher() {
     yield takeLatest('GET_POSTS', fetchPost)
}


export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}