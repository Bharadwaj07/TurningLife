
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";


// pages for this kit

import LandingPage from "views/LandingPage.js";
import BlogPost from "views/blog/BlogPost";
import Thought from "views/BrainThpught/Thought";
import Test from './views/Test/Test';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route
          path="/landing-page"
          render={props => <LandingPage {...props} />}
        />
        <Route
          exact
          path="/thought"
          render ={props => <Thought/>}
        />
        <Route
          path="/blog"
          render={props => <BlogPost/>}
        />
        <Route
          path="/test"
          render={props => <Test/>}
        />
        <Redirect from="/" to="/landing-page" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
