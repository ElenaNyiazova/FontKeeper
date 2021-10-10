import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainScreen from './components/main-screen/main-screen';
import PageNotFound from './components/page-not-found/page-not-found';
import './App.scss';
import AdminScreen from './components/AdminScreen/AdminScreen';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route exact path='/'>
            <MainScreen />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          <Route exact path='/admin'>
            <AdminScreen />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      <Footer />
    </div>
  );
};

export default App;
