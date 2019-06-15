import React, { Component } from "react";
import { Provider } from "mobx-react";
import { HashRouter, Route } from "react-router-dom";
import { stores } from "./stores";
import Layout from "./pages/layout";
import App from "./pages/app";
import Home from './pages/home'

class AppRouter extends Component {
  render() {
    return (
      <Provider {...stores}>
        <HashRouter>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/app" component={App} />
          </Layout>
        </HashRouter>
      </Provider>
    );
  }
}

export default AppRouter;
