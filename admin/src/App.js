import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UserList from "./pages/user/userList/UserList"
import UserNew from "./pages/user/userNew/UserNew"
import UserUpdate from "./pages/user/userUpdate/UserUpdate"
import MovieList from "./pages/movie/movieList/MovieList"
import MovieNew from "./pages/movie/movieNew/MovieNew"
import MovieUpdate from "./pages/movie/movieUpdate/MovieUpdate"
import ListList from "./pages/list/listList/ListList"
import ListNew from "./pages/list/listNew/ListNew"
import ListUpdate from "./pages/list/listUpdate/ListUpdate"
import GenreList from "./pages/genre/genreList/GenreList"
import GenreNew from "./pages/genre/genreNew/GenreNew"
import GenreUpdate from "./pages/genre/genreUpdate/GenreUpdate"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const {user} = useContext(AuthContext)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>} />  
      </Routes>
      {user && <>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>  
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/find/:id" element={<UserUpdate />} />
            {/* <Route path="/users/create" element={<NewUser />} /> */}
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movies/create" element={<MovieNew />} /> 
            <Route path="/movies/find/:id" element={<MovieUpdate />} />
            <Route path="/lists" element={<ListList />} /> 
            <Route path="/lists/create" element={<ListNew />} />
            <Route path="/lists/find/:id" element={<ListUpdate />} />
            <Route path="/genres" element={<GenreList />} /> 
            <Route path="/genres/create" element={<GenreNew />} /> 
            <Route path="/genres/find/:id" element={<GenreUpdate />} /> 
          </Routes>
        </div>
      </>}
    </Router>
  )
}

export default App;
