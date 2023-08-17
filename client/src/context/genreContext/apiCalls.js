import { getGenreFailure, getGenreStart, getGenreSuccess} from './GenreAction'
import axios from 'axios'

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
