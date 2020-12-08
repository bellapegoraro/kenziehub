import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Register/index";
import Home from './pages/home';

function App() {
  return (
    <>
      <Link to="/register">Cadastrar</Link>
      <Switch>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <Route path = "/">
          <Home/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
