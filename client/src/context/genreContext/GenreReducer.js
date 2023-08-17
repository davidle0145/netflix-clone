const genreReducer = (state, action) => {
    switch(action.type) {
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
        default: 
            return {...state}
    }
}

export default genreReducer
