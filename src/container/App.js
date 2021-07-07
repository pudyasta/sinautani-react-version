import React, { Component } from 'react'
import { Navbar } from './components/'
import { Main, Pertanian, Perkebunan, Hidroponik, Login, Dashboard } from './pages'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import './App.css'


import green from '@material-ui/core/colors/green';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { AuthProvider } from '../config/context/authContext';

const success = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default class App extends Component {


  render() {
    if (window.location.host.split(".")[0] === "dashboard") {
      return (
        <Router>
          <ThemeProvider theme={success}>

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
          </ThemeProvider>
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
