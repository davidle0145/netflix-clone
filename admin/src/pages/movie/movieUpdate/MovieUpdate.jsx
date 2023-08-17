import { useLocation } from "react-router-dom";
import "./movieUpdate.css";
import { Publish } from "@material-ui/icons";
import { useContext, useEffect } from "react";
import { GenreContext } from "../../../context/genreContext/GenreContext.js"
import { getGenre } from "../../../context/genreContext/apiCalls.js";

export default function MovieUpdate() {
    const location = useLocation()
    const movie = location.state.movie
    const {genres, dispatch} = useContext(GenreContext);
    
    useEffect(() => {
        getGenre(dispatch)
      }, [dispatch])

  return (
    <div className="movie">
        <div className="movieTitleContainer">
            <h1 className="movieTitle">Movie Information</h1>
        </div>
        <div className="movieContainer">
            <div className="movieShow">
                <div className="movieInfoDetails">
                    <span className="movieShowTitle">Movie Details</span>
                    <div className="movieInfoItem">
                        <span className="movieInfoKey">Title:</span>
                        <span className="movieInfoValue">{movie.title}</span>
                    </div>
                    <div className="movieInfoItem">
                        <span className="movieInfoKey">Genre:</span>
                        <span className="movieInfoValue">{movie.genre}</span>
                    </div>
                    <div className="movieInfoItem">
                        <span className="movieInfoKey">Year:</span>
                        <span className="movieInfoValue">{movie.year}</span>
                    </div>
                    <div className="movieInfoItem">
                        <span className="movieInfoKey">Limit:</span>
                        <span className="movieInfoValue">{movie.limit}</span>
                    </div>
                </div>
                <div className="movieInfoImage">
                    <span className="movieShowTitle">Movie Image</span>
                    <div className="movieInfoItem">
                        <span className="movieInfoKey">img:</span>
                        <img src={movie.img} alt="" className="movieUploadImg" />
                    </div>
                    <div className="movieInfoItem">
                        <span className="movieInfoKey">imgTitle:</span>
                        <img src={movie.imgTitle} alt="" className="movieUploadImg" />
                    </div>
                    <div className="movieInfoItem">
                        <span className="movieInfoKey">imgSm:</span>
                        <img src={movie.imgSm} alt="" className="movieUploadImg" />
                    </div>
                </div>
            </div>
            <div className="movieUpdate">
                <span className="movieUpdateTitle">Update movie</span>
                <form className="movieForm">
                    <div className="movieFormLeft">
                        <label>Title</label>
                        <input type="text" placeholder={movie.title} />
                        <label>Year</label>
                        <input type="text" placeholder={movie.year}/>
                        <label>Genre</label>
                        <select name="genre" id="genre">
                            <option value={movie.genre}>{movie.genre}</option>
                            {genres.map((genre) => (
                                <option key={genre._id} value={genre._id}>{genre.title}</option>
                            ))}
                        </select>
                        <label>Limit</label>
                        <input type="text" placeholder={movie.limit}/>
                        <label>Trailer</label>
                        <input type="file" placeholder={movie.trailer}/>
                        <label>Video</label>
                        <input type="file" placeholder={movie.video}/>
                    </div>
                    <div className="movieFormRight">
                        <div className="movieUpload">
                            <img src={movie.img} alt="" className="movieUploadImg" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <div className="movieUpload">
                            <img src={movie.imgTitle} alt="" className="movieUploadImg" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <div className="movieUpload">
                            <img src={movie.imgSm} alt="" className="movieUploadImg" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="movieButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}