import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/users">
          Users
        </NavLink> */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route>
            <h1>404: wrong page goofy</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
