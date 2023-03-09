import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./common/Header";
import CardList from "./home/CardList";
import User from "./user/User";
import NotFound from "./common/NotFound";

function App() {
  /*
  Header displays on every page
  Homepage includes a list of cards for each user
  /users/:userid route display the user profile page instead
  */
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <CardList />
        </Route>
        <Route path="/users/:userId">
          <User />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
