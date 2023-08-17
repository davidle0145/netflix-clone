import {
    getUserStart, getUserSuccess, getUserFailure,
    updateUserStart, updateUserSuccess, updateUserFailure,
    deleteUserStart, deleteUserSuccess, deleteUserFailure
} from './UserAction'
import axios from 'axios'
//GET User
export const getUser = async(dispatch) => {
    dispatch(getUserStart())
    try {
        const res = await axios.get("/users", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        console.log(res.data);
        dispatch(getUserSuccess(res.data.data))
    } catch (err) {
        dispatch(getUserFailure())
    }
}
//CREATE User
// export const createUser = async(user, dispatch) => {
//     dispatch(createUserStart())
//     try {
//         const res = await axios.post("/users/create", user, {
//             headers: {
//                 token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
//             }
//         })
//         dispatch(createUserSuccess(res.data.data))
//     } catch (err) {
//         dispatch(createUserFailure())
//     }
// }
//UPDATE User
export const updateUser = async(user, dispatch) => {
    dispatch(updateUserStart())
    try {
        const res = await axios.put("/users/" + user._id, user, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(updateUserSuccess(res.data.data))
    } catch (err) {
        dispatch(updateUserFailure())
    }
}
//DELETE User
export const deleteUser = async(id, dispatch) => {
    dispatch(deleteUserStart())
    try {
        await axios.delete("/users/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(deleteUserSuccess(id))
    } catch (err) {
        dispatch(deleteUserFailure())
    }
}
