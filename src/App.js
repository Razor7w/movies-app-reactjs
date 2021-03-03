import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MoviesContextProvider from './contexts/MoviesContext';
import PeopleContextProvider from './contexts/PeopleContext';
import Header from './components/Common/Header';
import MoviesIndex from './components/Movies/index';
import PeopleIndex from './components/People/index';
import "./assets/style.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/'>
        <MoviesContextProvider>
          <MoviesIndex component={MoviesIndex} />
        </MoviesContextProvider>
      </Route>

      <Route exact path='/people'>
        <PeopleContextProvider>
          <PeopleIndex component={PeopleIndex} />
        </PeopleContextProvider>
      </Route>
      
    </Switch>
  
  </BrowserRouter>
  
);

  export default App;
