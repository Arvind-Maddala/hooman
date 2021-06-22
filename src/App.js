import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Pets from './components/Pets';
import WhyAdopt from './components/WhyAdopt';
import Footer from './components/Footer';
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
    <Footer />
    </div>
  )
}

export default App
