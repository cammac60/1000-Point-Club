import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';

import Splash from '../../containers/Splash/Splash.js';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Profile from '../Profile/Profile';
import Club from '../../containers/Club/Club';

const App = props => {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Splash />} />
      <Route exact path="/profile" render={() =>
        props.user ?
        <>
          <Header />
          <Profile />
        </> :
        <Loader />
      }
      />
      <Route exact path="/1000club" render={() => <Loader />}/>
    </div>
  );
}

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(App);
