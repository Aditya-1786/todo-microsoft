import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Links from "./components/Links";
import Card from "./components/Card";
import { useState } from "react";
const taskss = [
  { description: "Do Laundry", id: "t1", isHover: false, isFav: false },
  { description: "Do Mopping", id: "t2", isHover: false, isFav: false },
  { description: "Get Grocery", id: "t3", isHover: false, isFav: false },
];
function App() {
  const [favorite, setFavorite] = useState(false);

  const favoriteHandler = (value) => {
    setFavorite(value);
  };

  return (
    <div className="whole">
      <NavBar></NavBar>
      <div className="body-container">
        <Links className="link-cont" onFav={favoriteHandler} />
        <Card className="card-cont" list={taskss} fav={favorite} />
      </div>
    </div>
  );
}

export default App;
