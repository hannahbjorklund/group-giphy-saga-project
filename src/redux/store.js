import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects'
import logger from 'redux-logger';
import axios from 'axios';

function* rootSaga() {
    yield takeLatest('SAGA/GET_GIFS', getGifs)
    yield takeLatest('SAGA/GET_FAVS', getFavs)
    yield takeLatest('SAGA/ADD_FAV', addFav)
    yield takeLatest('SAGA/ADD_CAT', addCategory)
}

function* getGifs() {
    console.log('Called getGifs()')
    console.log(' - Making axios request...')
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/gifs'
        })
        console.log(' - Success! Response: ', response)

        console.log(' - Success! Setting new gis...')
        yield put({
            type: 'SET_GIFS',
            payload: response.data
        })
    }
    catch (error) {
        console.error('getGifs failed:', error)
    }

}

function* getFavs() {
    console.log('Called getFavs()')
    console.log(' - Sending axios request...')
    try {
        const response = yield axios({
            method: 'GET',
            url: '/favorites'
        })
        console.log(' - Success! Response: ', response)
        console.log(' - Setting new favorites...')
        yield put({
            type: 'SET_FAV',
            payload: response.data
        })
        console.log(' - Done!')
    }
    catch (error) {
        console.error('getFavs failed:', error)
    }
}

function* addFav(action) {
    console.log('Called addFav()')
    console.log(' - Sending axios request...')
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/favorites',
            data: action.payload
        })
        console.log(' - Success! Response: ', response)
        console.log(' - Getting new favorites...')
        yield put({
            type: 'SAGA/GET_FAVS'
        })
    } 
    catch (error) {
        console.error('addFav failed:', error)
    }
}

function* addCategory(action) {
    console.log('Called addCategory()')
    console.log(' - Sending axios request...')
    try {
        const response = yield axios({
            method: 'PUT',
            url: '/api/favorites',
            data: action.payload
        })
        console.log(' - Success! Response: ', response)
        console.log(' - Getting new favorites...')
        yield put({
            type: 'SAGA/GET_FAVS'
        })
    }
    catch(error) {
        console.error('addCategory failed:', error)
    }
}

const sagaMiddleware = createSagaMiddleware()

const gifs = (state = [], action => {
    if (action.type === 'SET_GIFS') {
        return [action.payload]
    }
    return state
})

const favorites = (state = [], action) => {
    switch(action.type) {
        case 'SET_FAV':
            return [...state, action.payload]
        case 'SET_CAT':
            return [...state, action.payload]
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        gifs,
        favorites
    }),
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga)

export default store