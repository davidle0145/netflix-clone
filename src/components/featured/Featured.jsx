import React from 'react'
import './featured.scss'
import { InfoOutlined, PlayArrow } from '@material-ui/icons'

const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
    
        <div className="info">
            <img src="https://imgv3.fotor.com/images/blog-richtext-image/part-blurry-image.jpg" alt="" />
            <span className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, quis eum reiciendis, dolorum debitis perspiciatis ipsa illo, voluptatum voluptas nemo facere nesciunt inventore qui ex hic enim doloribus. Nobis, ad!
            </span>
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