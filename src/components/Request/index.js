import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Login from "../pages/Login/";
import axios from "axios";

const Authenticator = () => {
  const [isAuthenticated, setAuthentication] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
    if (!token) {
      setAuthentication(false);
    }

    axios
      .get("https://kenziehub.me", {
        headers: { Auhorization: token },
      })
      .then(() => {
        setAuthentication(true);
        history.push("/");
      })
      .catch(() => {
        setAuthentication(false);
      });
  }, [history, setAuthentication]);

  if (isAuthenticated === undefined) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated === false) {
    return (
      <Switch>
        <Route path="/login">
          <Login setAuthentication={setAuthentication} />
        </Route>
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/user">
        <Login setAuthentication={setAuthentication} />
      </Route>
    </Switch>
  );
};

export default Authenticator;
