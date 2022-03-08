import React, { useState, useEffect } from "react";
import reactDom from "react-dom";

const AuthContext = React.createContext({
  isLoggedIn: false,
  user: null,
  onSignUp: (user) => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const isUserLogged = localStorage.getItem("isLogged");

  useEffect(() => {
    if (isUserLogged === "true") {
      setIsLoggedIn(true);
      setUser({
        First: localStorage.getItem("First"),
        Last: localStorage.getItem("Last"),
        Mail: localStorage.getItem("Mail"),
      });
    } else {
      setIsLoggedIn(false);
    }
  }, [isUserLogged]);

  const signUpHandler = (event) => {
    setIsLoggedIn(true);
    setUser(event);
    localStorage.setItem("isLogged", true);
    localStorage.setItem("First", event.First);
    localStorage.setItem("Last", event.Last);
    localStorage.setItem("Mail", event.Mail);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("isLogged");
    localStorage.removeItem("First");
    localStorage.removeItem("Last");
    localStorage.removeItem("Mail");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        user: user,
        onSignUp: signUpHandler,
        onLogOut: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
