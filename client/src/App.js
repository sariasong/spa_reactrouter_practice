import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Product from './components/Product';

const App = () => (
  <Fragment>
    <NavBar>
      <Switch>
        <Route exact path="/" component={Home} />,
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/products/:id" component={Product} />
        <Route component={NoMatch} />
    </Switch>
   </NavBar>
  </Fragment>
);

export default App;