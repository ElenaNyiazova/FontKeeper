import React from "react";
import {Switch, Route} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import './app.css';

const App = () => {
    return (
      <Switch>
        <Route exact path="/">
          <MainScreen  />
        </Route>
        <Route>
            <>
            <h1>Page not found =(</h1>
            </>
        </Route>
      </Switch>
    );
  };
  
  export default App;