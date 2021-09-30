import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/homepage/HomePage';
import About from './components/aboutpage/About';
import User from './components/userpage/User';

function App() {
  return (
    <Router>
      <main className="App">
        <Navbar />
        <Switch>
          <Route exact path="/github-finder">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/:username">
            <User />
          </Route>
        </Switch>
      
      </main>
    </Router>
  );
}

export default App;
