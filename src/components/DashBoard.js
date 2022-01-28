import React from "react";
import NavBar from "./NavBar";
import Links from "./Links";
import Card from "./Card";
import { useState } from "react";
import "./DashBoard.css";
import firebase from "firebase";

// console.log(docs);
var db = firebase.firestore();
const docRef = db.collection("data");
function DashBoard(props) {
  const [favorite, setFavorite] = useState(false);

  // setTaskss(task);
  // data();
  const favoriteHandler = (value) => {
    setFavorite(value);
    // const docs = db.collection("data").get();
    // console.log(docs);
  };

  return (
    <div className="whole">
      <NavBar></NavBar>
      <div className="body-container">
        <Links
          fav={favorite}
          setFavorite={setFavorite}
          className="link-cont"
          onFav={favoriteHandler}
          style={{ position: "sticky" }}
          information={props.info}
        />
        <Card
          className="card-cont"
          list={props.list}
          fav={favorite}
          userInfo={props.info}
        />
      </div>
    </div>
  );
}
export default DashBoard;
