import React, {useRef, useState } from 'react'
import './list.scss'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import ListItem from '../listItem/ListItem'

const List = ({list}) => {

    const listRef = useRef()
    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)
    
    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current?.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === "right" && slideNumber < 6) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

  return (
    <div className="list">
        <span className="list-title">{list.title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}}/>
            <div className="container" ref={listRef}>
                {list.content.map((item, index) => (
                    <ListItem item={item} index={index} key={item}/>
                ))}
            </div>
            <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}

export default List