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
