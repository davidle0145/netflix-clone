import "./genreList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GenreContext } from "../../../context/genreContext/GenreContext.js"
import { getGenre, createGenre, updateGenre, deleteGenre } from "../../../context/genreContext/apiCalls.js"

export default function GenreList() {
  const {genres, dispatch} = useContext(GenreContext);

  useEffect(() => {
    getGenre(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    deleteGenre(id, dispatch)
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "Title", width: 250 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{pathname:"/genres/find/" + params.row._id}} state={{genre: params.row}}>
              <button className="genreListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="genreListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="genreList">
      <div className="genreTitleContainer">
        <h1 className="genreTitle">Genre</h1>
        <Link to="/genres/create">
          <button className="genreAddButton">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={genres}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}