import {
    MailOutline,
    PermIdentity,
    Publish,
  } from "@material-ui/icons";
  import "./userUpdate.css";
  import { useLocation } from "react-router-dom";
  
  export default function UserUpdate() {
    const location = useLocation()
    const user = location.state.user
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">User Information</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src={user.picture} alt="" className="userShowImg"/>
              <div className="userShowTopTitle">
                <span className="userShowUsername">{user.username}</span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{user.username}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{user.email}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">User Update</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input type="text" placeholder="annabeck99" className="userUpdateInput"/>
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput" />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img src={user.picture} alt="" className="userUpdateImg" />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }