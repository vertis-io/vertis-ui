import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './LoginPage/Login';
import Home from './Home/Home';
import Landing from './Landing/Landing';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route path='/login' component={Login}/>
      <Route path='/home' component={Home}/>
    </Switch>
  );
};

export default Routes;