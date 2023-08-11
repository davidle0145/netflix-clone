import {
    createMovieFailure, createMovieStart, createMovieSuccess,
    deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, 
    getMovieFailure, getMovieStart, getMovieSuccess,
    updateMovieFailure, updateMovieStart, updateMovieSuccess
} from './MovieAction'
import axios from 'axios'
//GET Movie
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
//CREATE Movie
export const createMovie = async(movie, dispatch) => {
    dispatch(createMovieStart())
    try {
        const res = await axios.post("/movies/create", movie, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(createMovieSuccess(res.data))
    } catch (err) {
        dispatch(createMovieFailure())
    }
}
//UPDATE Movie
export const updateMovie = async(movie, dispatch) => {
    dispatch(updateMovieStart())
    try {
        const res = await axios.put("/movies", movie, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(updateMovieSuccess(res.data))
    } catch (err) {
        dispatch(updateMovieFailure())
    }
}
//DELETE Movie
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
