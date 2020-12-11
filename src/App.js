import { GlobalStyle } from "./styles";
import { Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Register/index";
import Login from "./pages/Login";
import Home from "./pages/HomeScreen";
import Users from "./pages/UserList";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/register">
          <Register></Register>
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
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
