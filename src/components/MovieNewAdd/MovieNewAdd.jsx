import { useDispatch } from "react-redux";

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
        dispatch({ type: "POST_NEW_MOVIE_TITLE", payload: newDescription })
        dispatch({ type: "POST_NEW_MOVIE_TITLE", payload: newPoster })
        dispatch({ type: "POST_NEW_MOVIE_TITLE", payload: newGenre_id })
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