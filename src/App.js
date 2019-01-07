import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NRoute from './components/Route'
import Navigation from './components/Navigation';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
         <Router>
           <NRoute />
         </Router>
      </div>
    );
  }
}

export default App;
