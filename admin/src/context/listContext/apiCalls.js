import { 
    getListFailure, getListStart, getListSuccess, 
    createListStart, createListSuccess, createListFailure, 
    updateListStart, updateListSuccess, updateListFailure,
    deleteListStart, deleteListSuccess, deleteListFailure, 
} from './ListAction'
import axios from 'axios'
//GET List
export const getList = async(dispatch) => {
    dispatch(getListStart())
    try {
        const res = await axios.get("/lists", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(getListSuccess(res.data.data))
    } catch (err) {
        dispatch(getListFailure())
    }
}
//CREATE List
export const createList = async(list, dispatch) => {
    dispatch(createListStart())
    try {
        const res = await axios.post("/lists/create", list, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(createListSuccess(res.data.data))
    } catch (err) {
        dispatch(createListFailure())
    }
}
//UPDATE List
export const updateList = async(list, dispatch) => {
    dispatch(updateListStart())
    try {
        const res = await axios.put("/lists/" + list._id, list, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(updateListSuccess(res.data.data))
    } catch (err) {
        dispatch(updateListFailure())
    }
}
//DELETE List
export const deleteList = async(id, dispatch) => {
    dispatch(deleteListStart())
    try {
        await axios.delete("/lists/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(deleteListSuccess(id))
    } catch (err) {
        dispatch(deleteListFailure())
    }
}
