import { useDispatch } from "react-redux";
import { useState } from 'react';

function MovieNewAdd() {
    const [ newTitle, submitTitle ] = useState({ title: '' })
    const [ newDescription, submitDescription ] = useState({ description:'' })
    const [ newPoster, submitPoster] = useState({ poster: '' })
    const [ newGenre_id, submitGenre_id] = useState({ genre_id: '' })

    // const [ title, submitTitle ] = useState('')
    // const [ description, submitDescription ] = useState('')
    // const [ poster, submitPoster] = useState('')
    // const [ genre_id, submitGenre_id] = useState('')
    const dispatch = useDispatch



    const addNewMovie = event => {
        event.preventDefault();
        dispatch({ type: "POST_NEW_MOVIE_TITLE", payload: newTitle })
        dispatch({ type: "POST_NEW_MOVIE_DESCRIPTION", payload: newDescription })
        dispatch({ type: "POST_NEW_MOVIE_POSTER", payload: newPoster })
        dispatch({ type: "POST_NEW_MOVIE_GENRE_ID", payload: newGenre_id })
    }

      const handleSubmitTitle = event => {
        dispatch({...newTitle, title: event.target.value})
    }

    const handleSubmitDescription = event => {
        dispatch({...newDescription, description: event.target.value})
    }

    const handleSubmitPoster = event => {
        dispatch({...newPoster, poster: event.target.value})
    }

    const handleSubmitGenre_id = event => {
        dispatch({...newGenre_id, genre_id: event.target.value})
    }
    


    // const submitTitle = event => {
    //     dispatch({ type: "SET_TITLE", payload: {title: title }})
    // }

    // const submitDescription = event => {
    //     dispatch({ type: "SET_DESCRIPTION", payload: { description: description }})
    // }

    // const submitPoster = event => {
    //     dispatch({ type: "SET_POSTER", payload: { poster: poster }})
    // }

    // const submitGenre_id = event => {
    //     dispatch({ type: "SET_GENRE_ID", payload: { genre_id: genre_id }})
    // }
    
    return(
        <div>
            <h2>Add a New Movie</h2>
            <form>
                <input type='text' placeholder='title' value={newTitle} onChange={handleSubmitTitle} />
                <input type='text' placeholder='description' value={newDescription} onChange={handleSubmitDescription} />
                <input type='text' placeholder='url' value={newPoster} onChange={handleSubmitPoster} />
                <input type='text' placeholder='genre' value={newGenre_id} onChange={handleSubmitGenre_id} />
            </form>
            {/* <form onSubmit >
                <input type='text' placeholder='title' value={title} onChange={ (event) => submitTitle( event.target.value )} />
                <input type='text' placeholder='description' value={description} onChange={ (event) => submitDescription( event.target.value )} />
                <input type='text' placeholder='url' value={poster} onChange={ (event) => submitPoster( event.target.value )} />
                <input type='text' placeholder='genre' value={genre_id} onChange={ (event) => submitGenre_id( event.target.value )} />
            </form> */}
        </div>
    )
}

export default MovieNewAdd;