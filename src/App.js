import { GlobalStyle } from "./styles";
import { Switch, Route } from "react-router-dom";
import Register from "./pages/Register/index";
import Home from "./pages/HomeScreen";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
