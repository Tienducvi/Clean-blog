import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from '../containers/NavBar';
import Home from '../page/Home';
import AboutMe from '../page/AboutMe';
import SamplePost from '../page/SamplePost';
import ContactMe from '../page/ContactMe';
import PostDetail from '../containers/Post';

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
          <Route path="/sample">
            <SamplePost />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
          <Route path="/post/:postId">
            <PostDetail />
          </Route>
          <Route>404 Not Found!</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
