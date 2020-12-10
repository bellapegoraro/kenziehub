import { GlobalStyle } from "./styles";
import { Switch, Route } from "react-router-dom";
import Register from "./pages/Register/index";
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
