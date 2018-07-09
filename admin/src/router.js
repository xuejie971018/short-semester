import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import HomePage from './routes/HomePage/HomePage';
import IndexPage from './routes/IndexPage/IndexPage';
import testPage from './routes/testPage';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <HomePage>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/orders" component={testPage} />
            <Route exact path="/storage" component={testPage} />
            <Route exact path="/resource" component={testPage} />
            <Route exact path="/settlement" component={testPage} />
            <Route exact path="/customerBills" component={testPage} />
            <Route exact path="/supplierBills" component={testPage} />
            <Route exact path="/customer" component={testPage} />
            <Route exact path="/product" component={testPage} />
            <Route exact path="/supplier" component={testPage} />
          </Switch>
        </HomePage>
      </div>
    </Router>
  );
}

export default RouterConfig;
