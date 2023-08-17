import { useLocation, useNavigate } from "react-router-dom";
import "./listUpdate.css";
import { MovieContext } from "../../../context/movieContext/MovieContext.js"
import { ListContext } from "../../../context/listContext/ListContext.js"
import { useContext, useEffect, useState } from "react";
import { getMovie, updateMovie } from "../../../context/movieContext/apiCalls.js";

export default function ListUpdate() {
    const location = useLocation()
    const list = location.state.list
    const navigate = useNavigate()
    const [listMovie, setListMovie] = useState(null)

    const {dispatch} = useContext(ListContext)
    const {movies, dispatch: dispatchMovie} = useContext(MovieContext)

    useEffect(() => {
        getMovie(dispatchMovie)
    }, [dispatchMovie])
    
    const handleChange = (e) => {
        const value = e.target.value
        setListMovie({...list, [e.target.name]:value})
    }
    
    const handleSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, (option) => option.value)
        setListMovie({...listMovie, [e.target.name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateMovie(list, dispatch)
        navigate('/lists', {replace: true});
    }

  return (
    <div className="list">
      <div className="listTitleContainer">
        <h1 className="listTitle">List Information</h1>
      </div>
      <div className="listContainer">
        <div className="listShow">
            <div className="listInfoTop">
                <span className="listName">{list.title}</span>
            </div>
            <div className="listInfoBottom">
                <div className="listInfoItem">
                    <span className="listInfoKey">Genre:</span>
                    <span className="listInfoValue">{list.genre}</span>
                </div>
                <div className="listInfoItem">
                    <span className="listInfoKey">Type:</span>
                    <span className="listInfoValue">{list.type}</span>
                </div>
            </div>
        </div>  
        <div className="listUpdate">
            <form className="listForm">
                <div className="listFormLeft">
                    <span className="listUpdateTitle">List Update</span>
                    <label>List Title</label>
                    <input type="text" placeholder={list.title} onChange={handleChange} />
                    <label>Genre</label>
                    <input type="text" placeholder={list.genre} onChange={handleChange}/>
                    <label>Type</label>
                    <select name="type" onChange={handleChange}>
                        {list.type === "Movies" ? <>
                            <option selected value="Movies">Movies</option>
                            <option value="Series">Series</option>
                        </> : <>
                            <option value="Movies">Movies</option>
                            <option selected value="Series">Series</option>
                        </>}
                    </select>
                </div>
                <div className="listFormRight">
                    <div className="addMovieItem">
                        <label>Content</label>
                        <select multiple name="content" onChange={handleSelect} style={{height: "280px"}}>
                            {movies.map((movie) => (
                                <option key={movie._id} value={movie._id}>{movie.title}</option>
                            ))}
                        </select>
                    </div>
                    <button className="listButton" onClick={handleSubmit}>Update</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}