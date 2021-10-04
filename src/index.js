import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

function* fetchMovieDetails( action ){
    try{
        const detail = action.payload;
        console.log(action.payload);
        
        const movieDetails = yield axios.get( `/api/movie/details/${detail.id}` )
        yield put({ type: 'SET_MOVIE_DETAILS', payload: movieDetails.data })
    } catch (error) {
        console.log('Error in GET fetchMovieDetails', error);
        alert('Unable to get movie details')
    }
} 

function* postNewMovie( action ){
    try{
        yield axios.post('/api/movie', action.payload);
        // yield put({ type: 'FETCH_MOVIES' });
    }catch (error) {
        console.log('Error in post new movie', error);
        alert('Unable to add new movie')
    }
}

function* fetchMovieGenres( action ){
    try{
        const genre = action.payload;
        const movieGenre = yield axios.get( `/api/genre/movie-poop/${genre.id}` )
        yield put({ type: 'SET_MOVIE_GENRE', payload: movieGenre.data })
    } catch( error ) {
        console.log('Error in GET fetchMovieGenre', error);
        alert('Unable to get movie Genre')
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery( 'FETCH_MOVIES', fetchAllMovies );
    yield takeEvery( 'FETCH_MOVIE_DETAILS', fetchMovieDetails );
    yield takeEvery( 'FETCH_MOVIE_GENRES', fetchMovieGenres );
    yield takeEvery( 'POST_NEW_MOVIE', postNewMovie )
}



// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store genre details
const genre = ( state = [], action ) => {
    switch ( action.type ) {
        case 'SET_MOVIE_GENRE':
            return action.payload;
        default:
            return state;
    }
}

// Used to store movie details
const details = ( state = [], action ) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            return action.payload;
        default:
            return state;
    }
}



// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        genre,
        movies,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
