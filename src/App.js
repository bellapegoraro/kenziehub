import { GlobalStyle } from "./styles";
import { Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Register/index";
import Login from "./pages/Login";
import Home from "./pages/HomeScreen";

function App() {
  return (
    <>
      <GlobalStyle />
      <Link to="/register">Cadastrar</Link>
      <Link to="/login">Login</Link>
      <Switch>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
