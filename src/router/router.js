import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from '../containers/NavBar';
import Home from '../page/Home';
import AboutMe from '../page/AboutMe';

function Router() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
