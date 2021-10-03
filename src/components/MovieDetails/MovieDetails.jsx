import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function MovieDetails() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect( () => {
        dispatch({ type: 'FETCH_MOVIE_DETAILS' })
    }, [])

    const backToMovieList = () => {
        history.push('/')
    }
    return(
        <div>
            <h2>Movie Details for ???</h2>

            <button onClick={backToMovieList}>Back To Movie List</button>
        </div>

    )
}

export default MovieDetails;