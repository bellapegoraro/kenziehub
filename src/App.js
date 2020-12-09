import { GlobalStyle } from "./styles";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Register/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <Link to="/register">Cadastrar</Link>
      <Switch>
        <Route exact path="/register">
          <Register></Register>
        </Route>
      </Switch>
    </>
  );
}

export default App;
