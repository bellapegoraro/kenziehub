import { GlobalStyle } from "./styles";
import { Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Register/index";
import UserProfile from "./pages/UserPage";
import Home from "./pages/HomeScreen";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/profile/:id">
          <UserProfile/>
        </Route>
        <Route path = "/">
          <Home/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
