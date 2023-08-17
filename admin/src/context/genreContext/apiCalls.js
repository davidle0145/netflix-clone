import { 
    getGenreFailure, getGenreStart, getGenreSuccess, 
    createGenreStart, createGenreSuccess, createGenreFailure, 
    updateGenreStart, updateGenreSuccess, updateGenreFailure,
    deleteGenreStart, deleteGenreSuccess, deleteGenreFailure, 
} from './GenreAction'
import axios from 'axios'
//GET Genre
export const getGenre = async(dispatch) => {
    dispatch(getGenreStart())
    try {
        const res = await axios.get("/genres", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(getGenreSuccess(res.data.data))
    } catch (err) {
        dispatch(getGenreFailure())
    }
}
//CREATE Genre
export const createGenre = async(genre, dispatch) => {
    dispatch(createGenreStart())
    try {
        const res = await axios.post("/genres/create", genre, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(createGenreSuccess(res.data.data))
    } catch (err) {
        dispatch(createGenreFailure())
    }
}
//UPDATE Genre
export const updateGenre = async(genre, dispatch) => {
    dispatch(updateGenreStart())
    try {
        const res = await axios.put("/genres/" + genre._id, genre, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(updateGenreSuccess(res.data.data))
    } catch (err) {
        dispatch(updateGenreFailure())
    }
}
//DELETE Genre
export const deleteGenre = async(id, dispatch) => {
    dispatch(deleteGenreStart())
    try {
        await axios.delete("/genres/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(deleteGenreSuccess(id))
    } catch (err) {
        dispatch(deleteGenreFailure())
    }
}
