import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/homepage/HomePage';
import About from './components/aboutpage/About';

function App() {
  return (
    <Router>
      <main className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      
      </main>
    </Router>
  );
}

export default App;
