import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, FavouritePage, Trainer, Pokemon, Energy, Detail } from "./pages";
import NavbarTop from "./components/NavbarTop";

function App() {
  return (
    <Router>
      <NavbarTop />
      <div>
        <Switch>
          <Route path="/pokemon">
            <Pokemon />
          </Route>
          <Route path="/trainer">
            <Trainer />
          </Route>
          <Route path="/energy">
            <Energy />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/fav">
            <FavouritePage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
