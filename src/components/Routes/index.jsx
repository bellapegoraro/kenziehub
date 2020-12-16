import { GlobalStyle } from "../../styles";
import { Switch, Route } from "react-router-dom";
import Register from "../../pages/Register";
import UserProfile from "../../pages/UserProfile";
import Login from "../../pages/Login";
import Home from "../../pages/HomeScreen";
import Users from "../../pages/UserList";
import ProfilePage from "../../pages/ProfilePage";
import OtherUser from "../../pages/OtherUser";
import Favorites from "../../pages/Favorites";
const Routes = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route path="/devs">
          <Users />
        </Route>
        <Route path="/edit">
          <ProfilePage />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users/:id">
          <OtherUser />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
