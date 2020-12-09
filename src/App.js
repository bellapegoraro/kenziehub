import { GlobalStyle } from "./styles";

import { Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Register/index";
import UserList from "./pages/UserList";
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
