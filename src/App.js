<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import UserList from "./pages/UserList";
import { Switch, Route } from "react-router-dom";
=======
import { GlobalStyle } from "./styles";
>>>>>>> master

import { Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Register/index";
import UserList from "./pages/UserList";
function App() {
  return (
    <>
<<<<<<< HEAD
      <UserList />
      <Switch></Switch>
=======
      <GlobalStyle />
      <Link to="/register">Cadastrar</Link>
      <Switch>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/">
          <UserList />
        </Route>
      </Switch>
>>>>>>> master
    </>
  );
}

export default App;
