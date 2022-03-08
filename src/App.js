import "./App.css";

import { useState, useContext } from "react";
import DashBoard from "./components/DashBoard";
import SignUp from "./components/sign in/SignUp";

import AuthContext from "./context/auth-context";

function App() {
  // const [favorite, setFavorite] = useState(false);
  const context = useContext(AuthContext);
  const [taskss, setTaskss] = useState([]);

  // const favoriteHandler = (value) => {
  //   setFavorite(value);
  // };
  // console.log(taskss);

  // console.log(user);
  return (
    <div>
      {console.log(context.user)}
      {!context.isLoggedIn && <SignUp />}
      {context.isLoggedIn && (
        <DashBoard
          className="dash"
          info={context.user}
          list={taskss}
        ></DashBoard>
      )}
      ;
    </div>
  );
}

export default App;
