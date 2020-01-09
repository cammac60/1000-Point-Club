import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';

import Splash from '../../containers/Splash/Splash.js';
import { Header } from '../Header/Header';

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Splash />} />
      <Route exact path="/profile" render={() => <Header />}/>
    </div>
  );
}


export default App;
