import {
    deleteMovieFailure, 
    deleteMovieStart, 
    deleteMovieSuccess, 
    getMovieFailure, 
    getMovieStart, 
    getMovieSuccess
} from './MovieAction'
import axios from 'axios'

export const getMovie = async(dispatch) => {
    dispatch(getMovieStart())
    try {
        const res = await axios.get("/movies", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(getMovieSuccess(res.data.data))
    } catch (err) {
        dispatch(getMovieFailure())
    }
}

export const deleteMovie = async(id, dispatch) => {
    dispatch(deleteMovieStart())
    try {
        await axios.delete("/movies/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(deleteMovieSuccess(id))
    } catch (err) {
        dispatch(deleteMovieFailure())
    }
}
