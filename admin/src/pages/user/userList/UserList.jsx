import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/userContext/UserContext.js"
import { getUser, deleteUser } from "../../../context/userContext/apiCalls.js"

export default function UserList() {
  const {users, dispatch} = useContext(UserContext);

  useEffect(() => {
    getUser(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    deleteUser(id, dispatch)
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "user",
      headerName: "User",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.picture} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // },
    {
      field: "isAdmin",
      headerName: "is Admin",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{pathname:"/users/find/" + params.row._id}} state={{user: params.row}}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div className="movieTitleContainer">
        <h1 className="movieTitle">User List</h1>
        {/* <Link to="/movies/create">
          <button className="movieAddButton">Create</button>
        </Link> */}
      </div>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}