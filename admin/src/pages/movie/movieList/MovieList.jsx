import "./movieList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../../context/movieContext/MovieContext.js"
import { getMovie, deleteMovie } from "../../../context/movieContext/apiCalls.js"

export default function MovieList() {
  const {movies, dispatch} = useContext(MovieContext);

  useEffect(() => {
    getMovie(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    deleteMovie(id, dispatch)
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "movie",
      headerName: "Movie",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="movieListItem">
            <img className="movieListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "year", headerName: "Year", width: 120 },
    { field: "limit", headerName: "Limit", width: 120 },
    { field: "isSeries", headerName: "isSeries", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{pathname:"/movies/find/" + params.row._id}} state={{movie: params.row}}>
              <button className="movieListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="movieListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="movieList">
      <div className="movieTitleContainer">
        <h1 className="movieTitle">Movie List</h1>
        <Link to="/movies/create">
          <button className="movieAddButton">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}