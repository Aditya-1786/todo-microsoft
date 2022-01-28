import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Links from "./components/Links";
import Card from "./components/Card";
import { useState } from "react";
import DashBoard from "./components/DashBoard";
import SignUp from "./components/sign in/SignUp";
import firebase from "firebase";

function App() {
  // const [favorite, setFavorite] = useState(false);
  const [user, setUser] = useState(null);
  const [taskss, setTaskss] = useState([]);

  // const favoriteHandler = (value) => {
  //   setFavorite(value);
  // };
  // console.log(taskss);
  const update = (event) => {
    setUser(event);
  };

  const signUpHandler = (event) => {
    update(event);
  };
  // console.log(user);
  return (
    <div>
      {user === null && <SignUp onSignUp={signUpHandler} />}
      {user !== null && (
        <DashBoard className="dash" info={user} list={taskss}></DashBoard>
      )}
      ;
    </div>
  );
}

export default App;
