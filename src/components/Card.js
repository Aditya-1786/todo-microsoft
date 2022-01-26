import React from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import "./Card.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tasks from "./Tasks.js";

const Card = (props) => {
  return (
    <div className="carddd">
      <div className="heading">
        <div className="salutation-container">
          <div className="salutation">My Day</div>
          <div className="date">Saturday, 22 January</div>
        </div>
        <LightbulbIcon className="idea" />
        <MoreHorizIcon className="dots" />
      </div>
      <Tasks className="task-list" t={props.list} f={props.fav} />
    </div>
  );
};

export default Card;
