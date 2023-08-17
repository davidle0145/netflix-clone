import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./listNew.css";
import { MovieContext } from "../../../context/movieContext/MovieContext.js"
import { ListContext } from "../../../context/listContext/ListContext.js"
import { createList } from "../../../context/listContext/apiCalls.js"
import { getMovie } from "../../../context/movieContext/apiCalls.js"

export default function ListNew() {
  const [list, setList] = useState(null)
  const navigate = useNavigate()

  const {dispatch} = useContext(ListContext)
  const {movies, dispatch: dispatchMovie} = useContext(MovieContext)

  useEffect(() => {
    getMovie(dispatchMovie)
  }, [dispatchMovie])

  const handleChange = (e) => {
    const value = e.target.value
    setList({...list, [e.target.name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createList(list, dispatch)
    navigate('/lists', {replace: true});
  }

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value)
    setList({...list, [e.target.name] : value})
  }

  return (
    <div className="newMovie">
      <h1 className="addMovieTitle">List New</h1>
      <form className="addMovieForm">
        <div className="formLeft">
          <div className="addMovieItem">
            <label>Title</label>
            <input type="text" placeholder="Best Movie" name="title" onChange={handleChange}/>
          </div>

          <div className="addMovieItem">
            <label>Genre</label>
            <input type="text" placeholder="action" name="genre" onChange={handleChange}/>
          </div>

          <div className="addMovieItem">
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option value="Movies">Movies</option>
              <option value="Series">Series</option>
            </select>
          </div>
        </div>

        <div className="formRight">
          <div className="addMovieItem">
            <label>Content</label>
            <select multiple name="content" onChange={handleSelect} style={{height: "280px"}}>
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>{movie.title}</option>
              ))}
            </select>
          </div>
        </div>

        <button className="addMovieButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  )
}
