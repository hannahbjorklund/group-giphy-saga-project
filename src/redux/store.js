import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects'
import logger from 'redux-logger';
import axios from 'axios';

function* rootSaga() {
    yield takeLatest('SEARCH_GIFS', searchGifs)
    yield takeLatest('GET_FAV', getFav)
    yield takeLatest('ADD_FAV', addFav)
    yield takeLatest('ADD_CATEGORY', addCategory)
}

function* searchGifs() {
    console.log('In searchGifs')
}

function* getFav(){
    console.log('In getFav')
}

function* addFav() {
    console.log('In addFav')
}

function* addCategory() {
    console.log('In addCategory')
}

const sagaMiddleware = createSagaMiddleware()

const favs = (state = [], action) => {
    switch(action.type) {
        case 'SET_FAV':
            return state
        case 'SET_CATEGORY':
            return state
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        favs
    }),
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga)

export default store