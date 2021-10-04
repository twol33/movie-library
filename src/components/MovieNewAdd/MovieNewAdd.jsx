import { useDispatch } from "react-redux";
import { useState } from 'react';

function MovieNewAdd() {

    let updateObjects = {
        title: ' ',
        description: '',
        poster: '',
        genre_id: '',
    }

    let [ newMovie, setNewMovie ] = useState({updateObjects})

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'POST_NEW_MOVIE', payload: newMovie })
        console.log(newMovie);
        history.push('/')
    }

    return(
        <div>
            <h2>Add a New Movie</h2>
        
            <form onSubmit={handleSubmit}>

                <input
                    required
                    type='text' 
                    placeholder='Title'
                    value={newMovie.title} 
                    onChange={ (event) => setNewMovie({...newMovie, title: event.target.value })} 
                />

                <input 
                    type='text' 
                    placeholder='Description' 
                    value={newMovie.description} 
                    onChange={ (event) => setNewMovie({...newMovie, description: event.target.value })} 
                />

                <input 
                    type='text' 
                    placeholder='Url' 
                    value={newMovie.poster} 
                    onChange={ (event) => setNewMovie({...newMovie, poster: event.target.value })} 
                />

                <input 
                    type='text' 
                    placeholder='Genre' 
                    value={newMovie.genre_id} 
                    onChange={ (event) => setNewMovie({...newMovie, genre_id: event.target.value })} 
                />
                <button type='submit' >Save</button>
            </form>
        </div>
    )
}

export default MovieNewAdd;