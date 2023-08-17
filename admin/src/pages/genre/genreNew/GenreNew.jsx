import './genreNew.css'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GenreContext} from '../../../context/genreContext/GenreContext.js'
import { createGenre } from '../../../context/genreContext/apiCalls.js'

export default function GenreNew() {
  const [genre, setGenre] = useState(null)
  const navigate = useNavigate()
  const {dispatch} = useContext(GenreContext)

  const handleChange = (e) => {
    const value = e.target.value
    setGenre({...genre, [e.target.name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createGenre(genre, dispatch)
    navigate('/genres', {replace: true});
  }

  return (
    <div className="genreNew">
        <h1 className="addGenreTitle">Genre New</h1>
        <form className="addGenreForm">
            <div className="addGenreItem">
                <label>Title</label>
                <input type="text" placeholder="Drama" name="title" onChange={handleChange}/>
            </div>
            <button className="addGenreButton" onClick={handleSubmit}>Create</button>
        </form>
    </div>
  )
}
