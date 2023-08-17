import "./listList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "../../../context/listContext/ListContext.js"
import { getList, deleteList } from "../../../context/listContext/apiCalls.js"

export default function ListList() {
  const {lists, dispatch} = useContext(ListContext);

  useEffect(() => {
    getList(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    deleteList(id, dispatch)
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "title", headerName: "Title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{pathname:"/lists/find/" + params.row._id}} state={{list: params.row}}>
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
        <h1 className="movieTitle">List</h1>
        <Link to="/lists/create">
          <button className="movieAddButton">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}