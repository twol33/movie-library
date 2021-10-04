import { useDispatch } from "react-redux";

function MovieNewAdd() {
    const [ title, submitTitle ] = useState('')
    const [ description, submitDescription ] = useState('')
    const [ poster, submitPoster] = useState('')
    const [ genre_id, submitGenre_id] = useState('')
    const dispatch = useDispatch

    const submitTitle = event => {
        dispatch({ type: "SET_TITLE", payload: {title: title }})
    }

    const submitDescription = event => {
        dispatch({ type: "SET_DESCRIPTION", payload: { description: description }})
    }

    const submitPoster = event => {
        dispatch({ type: "SET_POSTER", payload: { poster: poster }})
    }

    const submitGenre_id = event => {
        dispatch({ type: "SET_GENRE_ID", payload: { genre_id: genre_id }})
    }
    
    return(
        <div>
            <h2>Add a New Movie</h2>
            <form onSubmit >
                <input type='text' placeholder='title' onChange={ (event) => submitTitle( event.target.value )} />
                <input type='text' placeholder='description' onChange={ (event) => submitDescription( event.target.value )} />
                <input type='text' placeholder='url' onChange={ (event) => submitPoster( event.target.value )} />
                <input type='text' placeholder='genre' onChange={ (event) => submitGenre_id( event.target.value )} />
            </form>
        </div>
    )
}

export default MovieNewAdd;