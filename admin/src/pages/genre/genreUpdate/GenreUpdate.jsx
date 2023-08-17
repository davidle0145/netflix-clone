import "./genreUpdate.css";
import { useLocation } from "react-router-dom";
  
export default function GenreUpdate() {
    const location = useLocation()
    const genre = location.state.genre
    return (
        <div className="genre">
            <div className="genreTitleContainer">
                <h1 className="genreTitle">Genre Info</h1>
            </div>
            <div className="genreContainer">
                <div className="genreShow">
                    <div className="genreInfoTop">
                        <span className="genreShowTitle">Movie Details</span>
                    </div>
                    <div className="genreInfoBottom">
                        <span className="genreInfoKey">Genre:</span>
                        <span className="genreName">{genre.title}</span>
                    </div>
                </div>
                <div className="genreUpdate">
                    <div className="genreForm">
                        <span className="genreUpdateTitle">Genre Update</span>
                        <label>Genre Title</label>
                        <input type="text" placeholder={genre.title}/>
                    </div>
                    <button className="genreButton">Update</button>
                </div>
            </div>
        </div>
    );
  }