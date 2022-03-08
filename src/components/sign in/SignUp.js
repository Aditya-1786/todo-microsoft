import React, { useState, useContext } from "react";
import "./SignUp.css";
import firebase from "firebase";
import AuthContext from "../../context/auth-context";

var db = firebase.firestore();
const docRef = db.collection("data");
const SignUp = () => {
  const context = useContext(AuthContext);

  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [mail, setMail] = useState("");

  const fnHandler = (event) => {
    setFn(event.target.value);
  };
  const lnHandler = (event) => {
    setLn(event.target.value);
  };
  const mailHandler = (event) => {
    setMail(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    context.onSignUp({
      First: fn,
      Last: ln,
      Mail: mail,
    });
  };

  return (
    <div>
      <form className="sign-container" onSubmit={submitHandler}>
        <div className="namee">
          <input
            className="firstName"
            type={"text"}
            placeholder="First Name"
            value={fn}
            onChange={fnHandler}
          ></input>
          <input
            className="lastName"
            type={"text"}
            placeholder="Last Name"
            value={ln}
            onChange={lnHandler}
          ></input>
        </div>
        <div className="mail-cont">
          <input
            className="email"
            type={"email"}
            placeholder="E-Mail"
            value={mail}
            onChange={mailHandler}
          ></input>
        </div>
        <div className="button">
          <button className="submit" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
