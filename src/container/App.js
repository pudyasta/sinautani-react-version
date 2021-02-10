import { Navbar } from './components/'
import { Main, Pertanian } from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/pertanian" >
            <Pertanian />
          </Route>
          <Route path="/perkebunan">
            <h1>kebun</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
