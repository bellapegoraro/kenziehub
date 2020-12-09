import { GlobalStyle } from "./styles";
import { Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Register/index";
import Home from './pages/HomeScreen';

function App() {
  return (
    <>
      <GlobalStyle />
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
