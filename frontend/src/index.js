/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/css/blk-design-system-react.css";
import "assets/demo/demo.css";

import App from "./App.js";
import ProfilePage from "pages/ProfilePage.js";
import { ContractProvider } from './context/ContractProvider';

ReactDOM.render(
    <ContractProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/components" render={(props) => <App {...props} />} />
          {/*<Route
            path="/landing-page"
            render={(props) => <LandingPage {...props} />}
          />
          <Route
            path="/register-page"
            render={(props) => <RegisterPage {...props} />}
          />*/}
          <Route
            path="/profile-page/:slug"
            render={(props) => <ProfilePage {...props} />}
          />
          <Redirect from="/" to="/components" />
        </Switch>
      </BrowserRouter>
    </ContractProvider>
  ,
  document.getElementById("root")
);
