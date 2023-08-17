const genreReducer = (state, action) => {
    switch(action.type) {
        // GET GENRE
        case "GET_GENRE_START":
            return {
                genres: [],
                isFetching: true,
                error: false
            }
        case "GET_GENRE_SUCCESS":
            return {
                genres: action.payload,
                isFetching: false,
                error: false
            }
        case "GET_GENRE_FAILURE":
            return {
                genres: [],
                isFetching: false,
                error: true
            }
        // CREATE GENRE
        case "CREATE_GENRE_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "CREATE_GENRE_SUCCESS":
            return {
                genres: [...state.genres, action.payload],
                isFetching: false,
                error: false
            }
        case "CREATE_GENRE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }
        // UPDATE GENRE
        case "UPDATE_GENRE_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "UPDATE_GENRE_SUCCESS":
            return {
                genres: state.genres.map((genre) => genre._id === action.payload._id && action.payload),
                isFetching: false,
                error: false
            }
        case "UPDATE_GENRE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }
        // DELETE GENRE
        case "DELETE_GENRE_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "DELETE_GENRE_SUCCESS":
            return {
                genres: state.genres.filter((genre) => genre._id !== action.payload),
                isFetching: false,
                error: false
            }
        case "DELETE_GENRE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }

        default: 
            return {...state}
    }
}

export default genreReducer
