import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Checkout, Home } from '../../pages';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/checkout" component={Checkout}/>
      </Switch>
    </Router>
  );
};

export default Routing;
