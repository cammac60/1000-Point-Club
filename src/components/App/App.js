import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';

import Splash from '../../containers/Splash/Splash.js';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Splash />} />
      <Route exact path="/profile" render={() => <Header />}/>
      <Route exact path="/1000club" render={() => <Loader />}/>
    </div>
  );
}


export default App;
