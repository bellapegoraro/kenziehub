import { GlobalStyle } from "./styles";
<<<<<<< HEAD

import { Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Register/index";
import UserList from "./pages/UserList";
=======
import { Switch, Route } from "react-router-dom";
import Register from "./pages/Register/index";
import Home from "./pages/HomeScreen";

>>>>>>> 229d3c4f333dbcf0cee4d414c32f50c5dbf94803
function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/">
<<<<<<< HEAD
          <UserList />
=======
          <Home />
>>>>>>> 229d3c4f333dbcf0cee4d414c32f50c5dbf94803
        </Route>
      </Switch>
    </>
  );
}

export default App;
