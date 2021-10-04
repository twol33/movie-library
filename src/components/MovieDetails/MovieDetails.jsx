import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function MovieDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const movie = useSelector( store => store.details );
    const genre = useSelector( store => store.genre);
    console.log(movie);
    
    let movieToDisplay = {}
    movieToDisplay = movie

    const backToMovieList = () => {
        history.push('/')
    }
    return(
        <div key={ movie.id }>
            <p>{ movieToDisplay.description }</p>
            <h2>Categories</h2>
            {genre.map( genres => (
                <p>{genres.name}</p>
            ))}
            <button onClick={backToMovieList}>Back To Movie List</button>
        </div>
        

    )
}

export default MovieDetails;
