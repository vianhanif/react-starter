import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

// TODO:
import NoMatch from './../404';
import App from './../components/App';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
);

export default routes;
