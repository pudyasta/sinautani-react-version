import { Navbar } from './components/'
import { Main, Pertanian, Perkebunan, Hidroponik, Login } from './pages'
import { BrowserRouter as Router, Switch, Route, browserHistory } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from "../config/Redux/store"
import './App.css'


import React, { Component } from 'react'

export default class App extends Component {


  render() {
    if (window.location.host.split(".")[0] === "dashboard") {
      return (
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" exact>
                <Login />
              </Route>
              <Route>
                <h4 className='display-2 text-center align-content-center'>
                  404 Not Found
              </h4>
              </Route>
            </Switch>
          </Router>
        </Provider>
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
