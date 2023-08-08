import React, { useEffect, useState } from 'react'
import './listItem.scss'
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ListItem = ({item, index}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getMovie = async() => {
      try {
        const res = await axios.get("/movies/find/" + item, { 
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2NjMTcwYjUzYTcyYmQ0OWI0NDdkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTE1MjgwNiwiZXhwIjoxNjkyMDE2ODA2fQ.wVZGDkistq5vIy5AKuHuZBAevGe_r2g9PqT1-mjdVd0"
        }})
        setMovie(res.data.data)
      } catch (err) {
        console.log(err);
      }
    }
    getMovie()
  }, [item])

  return (
    <Link to={{pathname: "/watch"}} state={{movie: movie}}>
      <div className='list-item' style={{left: isHovered && (index * 225 - 50 + index * 2.5)}} 
        onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)}>
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop/>

            <div className="item-info">
              <div className="icons">
                <PlayArrow className="icon"/>
                <Add className="icon"/>
                <ThumbUpAltOutlined className="icon"/>
                <ThumbDownAltOutlined className="icon"/>
              </div>
              <div className="item-info-top">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  )
}

export default ListItem