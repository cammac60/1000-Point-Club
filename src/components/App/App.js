import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';

import Splash from '../../containers/Splash/Splash.js';

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Splash />} />
    </div>
  );
}


export default App;
