import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./web/pages/HomePage";
import ManagerPage from "./web/pages/ManagerPage";
import LeadPage from "./web/pages/LeadPage";
import DeveloperPage from "./web/pages/DeveloperPage";
import LoginPage from "./web/pages/LoginPage";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path={"/login"} exact component={props => <LoginPage />} />
      <Route path={"/"} exact component={props => <HomePage />} />
      <Route path={"/Manager"} exact component={props => <ManagerPage />} />
      <Route path={"/Lead"} exact component={props => <LeadPage />} />
      <Route path={"/Developer"} exact component={props => <DeveloperPage />} />
      <Route component={() => <h1>No Routes found</h1>} />
    </Switch>
  </BrowserRouter>
);
