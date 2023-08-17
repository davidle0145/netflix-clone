//GET Genre
export const getGenreStart = () => ({
    type: "GET_GENRE_START"
})

export const getGenreSuccess = (genres) => ({
    type: "GET_GENRE_SUCCESS",
    payload: genres
})

export const getGenreFailure = () => ({
    type: "GET_GENRE_FAILURE"
})

//CREATE Genre
export const createGenreStart = () => ({
    type: "CREATE_GENRE_START"
})

export const createGenreSuccess = (genre) => ({
    type: "CREATE_GENRE_SUCCESS",
    payload: genre
})

export const createGenreFailure = () => ({
    type: "CREATE_GENRE_FAILURE"
})

//UPDATE Genre
export const updateGenreStart = () => ({
    type: "UPDATE_GENRE_START"
})

export const updateGenreSuccess = (genre) => ({
    type: "UPDATE_GENRE_SUCCESS",
    payload: genre
})

export const updateGenreFailure = () => ({
    type: "UPDATE_GENRE_FAILURE"
})

//DELETE Genre
export const deleteGenreStart = () => ({
    type: "DELETE_GENRE_START"
})

export const deleteGenreSuccess = (id) => ({
    type: "DELETE_GENRE_SUCCESS",
    payload: id
})

export const deleteGenreFailure = () => ({
    type: "DELETE_GENRE_FAILURE"
})
