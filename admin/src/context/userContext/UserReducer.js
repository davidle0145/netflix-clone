const userReducer = (state, action) => {
    switch(action.type) {
        // GET User
        case "GET_USER_START":
            return {
                users: [],
                isFetching: true,
                error: false
            }
        case "GET_USER_SUCCESS":
            return {
                users: action.payload,
                isFetching: false,
                error: false
            }
        case "GET_USER_FAILURE":
            return {
                users: [],
                isFetching: false,
                error: true
            }
        // CREATE User
        // case "CREATE_USER_START":
        //     return {
        //         ...state,
        //         isFetching: true,
        //         error: false
        //     }
        // case "CREATE_USER_SUCCESS":
        //     return {
        //         users: [...state.users, action.payload],
        //         isFetching: false,
        //         error: false
        //     }
        // case "CREATE_USER_FAILURE":
        //     return {
        //         ...state,
        //         isFetching: false,
        //         error: true
        //     }
        // UPDATE User
        case "UPDATE_USER_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "UPDATE_USER_SUCCESS":
            return {
                users: state.users.map((user) => user._id === action.payload._id && action.payload),
                isFetching: false,
                error: false
            }
        case "UPDATE_USER_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }
        // DELETE User
        case "DELETE_USER_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "DELETE_USER_SUCCESS":
            return {
                users: state.users.filter((user) => user._id !== action.payload),
                isFetching: false,
                error: false
            }
        case "DELETE_USER_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default: 
            return {...state}
    }
}

export default userReducer
