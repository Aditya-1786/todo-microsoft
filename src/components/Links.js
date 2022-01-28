import React, { useState } from "react";
import "./Links.css";
// import "../App.css";
import { Avatar } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { TextField } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Links = (props) => {
  const favHandler = () => {
    props.setFavorite(!props.fav);
  };
  return (
    <div className="linkkk">
      <div className="profile">
        <Avatar sx={{ bgcolor: "#fba0e3" }} className="avatar">
          {`${props.information.First.toUpperCase().charAt(
            0
          )}${props.information.Last.toUpperCase().charAt(0)}`}
        </Avatar>
        <div className="details">
          <div className="Name">
            {`${props.information.First} ${props.information.Last}`}
          </div>
          <div className="mail">{props.information.Mail}</div>
        </div>
      </div>

      <div className="link-list">
        <div className="item">
          <WbSunnyOutlinedIcon className="sun"></WbSunnyOutlinedIcon>
          <div className="desc">My Day</div>
        </div>
        <div
          className={`item ${props.fav ? `selected` : ``}`}
          onClick={favHandler}
        >
          <StarBorderIcon className="star" />
          <div className="desc">Important</div>
        </div>
        <div className="item">
          <ListAltIcon className="plan" />
          <div className="desc">Planned</div>
        </div>
        <div className="item">
          <PersonOutlineIcon className="person" />
          <div className="desc">Assigned to me</div>
        </div>
        <div className="item">
          <HomeOutlinedIcon className="home" />
          <div className="desc">Tasks</div>
        </div>
      </div>
    </div>
  );
};

export default Links;
