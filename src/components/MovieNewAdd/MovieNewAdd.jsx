import { useDispatch } from "react-redux";
import { useState } from 'react';
import { useHistory } from "react-router";
import { createPopper } from '@popperjs/core';

function MovieNewAdd() {
    const dispatch = useDispatch();
    const history = useHistory()

    let updateObjects = {
        title: ' ',
        description: '',
        poster: '',
        genre_id: '',
    }

    let [ newMovie, setNewMovie ] = useState({updateObjects})

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'POST_NEW_MOVIE', payload: newMovie })
        console.log(newMovie);
        history.push('/')
    }

    const cancelGo = () => {
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

                {/* <input 
                    type='text' 
                    placeholder='Genre' 
                    value={newMovie.genre_id} 
                    onChange={ (event) => setNewMovie({...newMovie, genre_id: event.target.value })} 
                /> */}

                <select name='selectList' id='select-list'>
                    <option onChange={ (event) => setNewMovie({...newMovie, genre_id: event.target.value })} value={newMovie.genre_id} >Adventure</option>
                    <option onChange={ (event) => setNewMovie({...newMovie, genre_id: event.target.value })} value={newMovie.genre_id} >Animated</option>
                    <option onChange={ (event) => setNewMovie({...newMovie, genre_id: event.target.value })} value={newMovie.genre_id} >Biographical</option>
                    <option onChange={ (event) => setNewMovie({...newMovie, genre_id: event.target.value })} value={newMovie.genre_id} >Comedy</option>
                    <option onChange={ (event) => setNewMovie({...newMovie, genre_id: event.target.value })} value={newMovie.genre_id} >Disaster</option>
                    <option onChange={ (event) => setNewMovie({...newMovie, genre_id: event.target.value })} value={newMovie.genre_id} >Drama</option>
                    <option onChange={ (event) => setNewMovie({...newMovie, genre_id: event.target.value })} value={newMovie.genre_id} >Epic</option>
                    <option onChange={ (event) => setNewMovie({...newMovie, genre_id: event.target.value })} value={newMovie.genre_id} >Fantasy</option>
                    <option onChange={ (event) => setNewMovie({...newMovie, genre_id: event.target.value })} value={newMovie.genre_id} >Musical</option>
                    <option onChange={ (event) => setNewMovie({...newMovie, genre_id: event.target.value })} value={newMovie.genre_id} >Romantic</option>
                    <option onChange={ (event) => setNewMovie({...newMovie, genre_id: event.target.value })} value={newMovie.genre_id} >Science Fiction</option>
                    <option onChange={ (event) => setNewMovie({...newMovie, genre_id: event.target.value })} value={newMovie.genre_id} >Space-Opera</option>
                    <option onChange={ (event) => setNewMovie({...newMovie, genre_id: event.target.value })} value={newMovie.genre_id} >Superhero</option>
                </select>

                <button type='submit' >Save</button>
                <button onClick={cancelGo}>Cancel</button>
            </form>
        </div>
    )
}

export default MovieNewAdd;