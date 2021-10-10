import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainScreen from './components/main-screen/main-screen';
import ProfileScreen from './components/profile-screen/profile-screen';
import PageNotFound from './components/page-not-found/page-not-found';
import './App.scss';

const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <MainScreen />
      </Route>
      <Route exact path='/profile'>
        <ProfileScreen />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default App;
