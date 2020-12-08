import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <>
      <Switch>
        <Route path='/'><Home/></Route>
      </Switch>
    </>
  );
}

export default App;
