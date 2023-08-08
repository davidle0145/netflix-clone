import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home() {
  const months = useMemo(() => [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dev",
  ], [])

  const [userStats, setUserStats] = useState([])
  useEffect(() => {
    const getStats = async() => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2NjMTcwYjUzYTcyYmQ0OWI0NDdkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTE1MjgwNiwiZXhwIjoxNjkyMDE2ODA2fQ.wVZGDkistq5vIy5AKuHuZBAevGe_r2g9PqT1-mjdVd0"
          }
        })
        const statsList = res.data.data.sort(function (a,b) {
          return a._id - b._id
        })
        statsList.map(item => setUserStats(prev => [...prev, {name:months[item._id-1], "New User": item.total}]))
      } catch (err) {
        console.log(err);
      }
    }
    getStats()
  }, [months])

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}