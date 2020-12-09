import logo from "./logo.svg";
import "./App.css";
import UserList from "./pages/UserList";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <UserList />
      <Switch></Switch>
    </>
  );
}

export default App;
