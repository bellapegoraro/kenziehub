import { GlobalStyle } from "./styles";
import { Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Register/index";
import UserProfile from "./pages/UserPage";
import Login from "./pages/Login";
import Home from "./pages/HomeScreen";
import Users from "./pages/UserList";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/profile/">
          <UserProfile/>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/devs">
          <Users />
        </Route>
      </Switch>
    </>
  );
}

export default App;
