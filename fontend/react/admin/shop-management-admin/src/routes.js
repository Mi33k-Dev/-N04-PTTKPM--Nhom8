import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Admin/Dashboard';
import Orders from './components/Admin/Orders';
import Products from './components/Admin/Products';
import Users from './components/Admin/Users';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/orders" component={Orders} />
        <Route path="/products" component={Products} />
        <Route path="/users" component={Users} />
      </Switch>
    </Router>
  );
};

export default Routes;