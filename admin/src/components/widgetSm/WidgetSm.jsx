import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

export default function WidgetSm() {
  const [newUser, setNewUser] = useState([])

  useEffect(() => {
    const getNewUsers = async() => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
          }
        })
        setNewUser(res.data.data)
      } catch (err) {
        console.log(err);
      }
    }
    getNewUsers()
  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUser.map(user => (
          <li className="widgetSmListItem">
            <img src={user.picture || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} alt="" className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}