import React, { useState } from 'react'
import './listItem.scss'
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'

const ListItem = ({index}) => {

  const [isHovered, setIsHovered] = useState(false)
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"

  return (
    <div className='list-item' style={{left: isHovered && (index * 225 - 50 + index * 2.5)}} 
      onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)}>
      <img src="https://imgv3.fotor.com/images/blog-richtext-image/part-blurry-image.jpg" alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop/>

          <div className="item-info">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="item-info-top">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit atque maxime possimus consequuntur ipsam quam temporibus pariatur aperiam earum doloremque
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  )
}

export default ListItem