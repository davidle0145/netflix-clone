import React, { useContext, useEffect, useState } from 'react'
import './featured.scss'
import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import axios from 'axios'
import { GenreContext} from '../../context/genreContext/GenreContext.js'
import { getGenre } from '../../context/genreContext/apiCalls.js'

const Featured = ({type, setGenre}) => {
    const [content, setContent] = useState({})
    const {genres, dispatch} = useContext(GenreContext);

    useEffect(() => {
        const getRandomContent = async() => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`,
                { headers: {
                    token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                }})
                setContent(res.data.data[0])
            } catch (err) {
                console.log(err);
            }
        }
        getRandomContent()
        getGenre(dispatch)
    }, [type, dispatch])

  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "Movies" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
                    {genres.map((genre) => (
                        <option key={genre._id} value={genre._id}>{genre.title}</option>
                    ))}
                </select>
            </div>
        )}
        <img src={content.img} alt="" />
    
        <div className="info">
            <img src={content.imgTitle} alt="" />
            <span className="desc">{content.desc}</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    
    </div>
  )
}

export default Featured