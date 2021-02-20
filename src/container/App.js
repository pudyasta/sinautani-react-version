import { Navbar } from './components/'
import { Main, Pertanian, Perkebunan, Hidroponik, Login, Dashboard } from './pages'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import './App.css'


import React, { Component } from 'react'
import { AuthProvider } from '../config/context/authContext';

export default class App extends Component {


  render() {
    if (window.location.host.split(".")[0] === "dashboard") {
      return (
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/" exact>
                <Dashboard />
              </Route>
              <Route path="/login" >
                <Login />
              </Route>
              <Route>
                <h4 className='display-2 text-center align-content-center'>
                  404 Not Found
              </h4>
              </Route>
            </Switch>
          </AuthProvider>
        </Router>
      )
    }
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/pertanian" exact>
              <Pertanian />
            </Route>
            <Route path="/perkebunan">
              <Perkebunan />
            </Route>
            <Route path="/hidroponik">
              <Hidroponik />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
