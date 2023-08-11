import { useContext, useState } from "react";
import "./newMovie.css";
import {storage} from "../../firebase.js"
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid"
import { createMovie } from "../../context/movieContext/apiCalls.js"
import { MovieContext } from "../../context/movieContext/MovieContext.js"

export default function NewMovie() {
  const [movie, setMovie] = useState(null)
  const [img, setImg] = useState(null)
  const [imgTitle, setImgTitle] = useState(null)
  const [imgSm, setImgSm] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [video, setVideo] = useState(null)
  const [uploaded, setUploaded] = useState(0)
  
  const metadata = {contentType: 'image/jpeg'}
  const {dispatch} = useContext(MovieContext)

  const handleChange = (e) => {
    const value = e.target.value
    setMovie({...movie, [e.target.name]:value})
  }

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = v4() + item.file.name
      const storageRef = ref(storage, 'images/' + fileName)
      const uploadTask = uploadBytesResumable(storageRef, item.file, metadata)
      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + progress + '% done')
      }, (err) => {
        {console.log(err)}
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setMovie((prev) => {
            return {...prev, [item.label]:downloadURL}
          })
          setUploaded((prev) => prev + 1)
          console.log('File available at', downloadURL)
        })
      })
    })
  }

  const handleUpload = (e) => {
    e.preventDefault()
    upload([
      {file: img, label: "img"},
      {file: imgTitle, label: "imgTitle"},
      {file: imgSm, label: "imgSm"},
      {file: trailer, label: "trailer"},
      {file: video, label: "video"}
    ])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createMovie(movie, dispatch)
  }

  return (
    <div className="newMovie">
      <h1 className="addMovieTitle">New Movie</h1>
      <form className="addMovieForm">
        <div className="addMovieItem">
          <label>Image</label>
          <input type="file" id="img" name="img" onChange={(e) => setImg(e.target.files[0])} />
        </div>
        <div className="addMovieItem">
          <label>Title image</label>
          <input type="file" id="imgTitle" name="imgTitle" onChange={e => setImgTitle(e.target.files[0])}/>
        </div>
        <div className="addMovieItem">
          <label>Thumbnail image</label>
          <input type="file" id="imgSm" name="imgSm" onChange={e => setImgSm(e.target.files[0])}/>
        </div>
        <div className="addMovieItem">
          <label>Title</label>
          <input type="text" placeholder="John Wick" name="title" onChange={handleChange}/>
        </div>
        <div className="addMovieItem">
          <label>Description</label>
          <input type="text" placeholder="description" name="desc" onChange={handleChange}/>
        </div>
        <div className="addMovieItem">
          <label>Year</label>
          <input type="text" placeholder="year" name="year" onChange={handleChange}/>
        </div>
        <div className="addMovieItem">
          <label>Genre</label>
          <input type="text" placeholder="genre" name="genre" onChange={handleChange}/>
        </div>
        <div className="addMovieItem">
          <label>Duration</label>
          <input type="text" placeholder="duration" name="duration" onChange={handleChange}/>
        </div>
        <div className="addMovieItem">
          <label>Limit</label>
          <input type="text" placeholder="limit" name="limit" onChange={handleChange}/>
        </div>
        <div className="addMovieItem">
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addMovieItem">
          <label>Trailer</label>
          <input type="file" name="trailer" onChange={(e) => setTrailer(e.target.files[0])}/>
        </div>
        <div className="addMovieItem">
          <label>Video</label>
          <input type="file" name="video" onChange={(e) => setVideo(e.target.files[0])}/>
        </div>
        {uploaded === 5 ? (<button className="addMovieButton" onClick={handleSubmit}>Create</button>) : (<button className="addMovieButton" onClick={handleUpload}>Upload</button>)}
      </form>
    </div>
  )
}
