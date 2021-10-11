import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainScreen from './components/main-screen/main-screen';
import PageNotFound from './components/page-not-found/page-not-found';
import './App.scss';
import RulesScreen from './components/RulesScreen/RulesScreen';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import LibraryScreen from './components/LibraryScreen/LibraryScreen';
import SuggestionsScreen from './components/SuggestionsScreen/SuggestionsScreen';
import UsersScreen from './components/UsersScreen/UsersScreen';

const App = () => {
  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route exact path='/FontKeeper'>
          <MainScreen />
        </Route>
        <Route exact path='/FontKeeper/profile'>
          <Profile />
        </Route>
        <Route exact path='/FontKeeper/admin/rules'>
          <RulesScreen />
        </Route>
        <Route exact path='/FontKeeper/admin/library'>
          <LibraryScreen />
        </Route>
        <Route exact path='/FontKeeper/admin/rules'>
          <RulesScreen />
        </Route>
        <Route exact path='/FontKeeper/admin/suggestions'>
          <SuggestionsScreen />
        </Route>
        <Route exact path='/FontKeeper/admin/users'>
          <UsersScreen />
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
