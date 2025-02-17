import React, { useState } from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect, HashRouter } from "react-router-dom";
import { connect } from "react-redux";
// Import Routes all
import { userRoutes, authRoutes } from "./routes/allRoutes";
// Import all middleware
import Authmiddleware from "./routes/middleware/Authmiddleware";
import Layout from "./components/Layout";
import AdminLayout from './components/AdminLayout'
import Search from './components/Search'

import './App.css';
import AdminAuthMiddleware from './routes/middleware/AdminAuthMiddleware';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminPanel from './pages/AdminPanel';

const NonAuthmiddleware = ({
  component: Component,
  layout: Layout,
  searchValue
}) => (
  <Route
    render={props => {
      if (localStorage.getItem("authUser") && (localStorage.getItem("authUser"))) {
        return (
          <Redirect to={{ pathname: "/dashboard", state: { from: props.location } }} />
        );
      }

      return (
        <Layout>
          {(searchValue != "") ?
            <Search searchValue={searchValue} />
            :
            <Component {...props} />
          }
        </Layout>
      );
    }}
  />
);

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin-login" exact component={AdminLoginPage} />

          {/* Admin Panel (Protected Route) */}
          <AdminAuthMiddleware
            layout={AdminLayout}
            path="/admin-panel"
            component={AdminPanel}
          />

          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
            />
          ))}

        </Switch>
      </Router >
    </div>

  );
}
const mapStateToProps = ({ reducer }) => {
  return {
    searchValue: reducer.searchValue
  };
}

export default connect(mapStateToProps, null)(App);