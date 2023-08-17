import genreReducer from './GenreReducer.js'
import {createContext, useReducer} from "react"

const INITIAL_STATE = {
    genres: [],
    isFetching: false,
    error: false
}

export const GenreContext = createContext(INITIAL_STATE)
export const GenreContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(genreReducer, INITIAL_STATE)
    
    return (
        <GenreContext.Provider value = {{genres: state.genres, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </GenreContext.Provider>
    )
}
