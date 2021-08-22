import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Pets from './components/pages/Pets';
import WhyAdopt from './components/pages/WhyAdopt';
import Footer from './components/layouts/Footer';
import './components/style.css/App.css';

const App = () => {
  return (
    <div className="app">
      <Router>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/pets"><Pets/></Route>
        <Route path="/whyadopt"><WhyAdopt/></Route>
        <Route path="/contact"><Contact/></Route>
      </Switch>
    </Router>
    </div>
  )
}

export default App
