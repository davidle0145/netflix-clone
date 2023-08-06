import React, { useEffect, useState } from 'react'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import axios from 'axios'

const Home = ({type}) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          { headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2NjMTcwYjUzYTcyYmQ0OWI0NDdkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTE1MjgwNiwiZXhwIjoxNjkyMDE2ODA2fQ.wVZGDkistq5vIy5AKuHuZBAevGe_r2g9PqT1-mjdVd0"
        }})
        setLists(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    getRandomLists()
  }, [type, genre])


  return (
    <div className='home'>
      <Navbar/>
      <Featured type={type}/>
      {lists.map((list) => (
        <List list={list}/>
      ))}
    </div>
  )
}

export default Home