import React, { Component } from 'react';
import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import BenSection from './components/BenSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';


export default class App extends Component {
  render(){
    return (
      <div className="App">
          <Navbar />
          <BenSection/>
          <AboutSection/>
          <ProjectSection/>
          <Footer/>
    
    </div>
    )
  }
};


