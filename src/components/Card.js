import React from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import "./Card.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tasks from "./Tasks.js";

const Card = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date();
  return (
    <div className="carddd">
      <div className="heading">
        <div className="salutation-container">
          <div className="salutation">My Day</div>
          <div className="date">{`${days[date.getDay()]}, ${
            months[date.getMonth()]
          } ${date.getDate()}`}</div>
        </div>
        <LightbulbIcon className="idea" />
        <MoreHorizIcon className="dots" />
      </div>
      <Tasks
        className="task-list"
        t={props.list}
        fav={props.fav}
        us={props.userInfo}
      />
    </div>
  );
};

export default Card;
