import React from "react";

import HomePage from "./pages/homepage/homePage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "../src/pages/shopPage/shope.component";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
