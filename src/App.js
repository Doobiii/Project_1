import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Objective from './components/objective/Objective'
import Team from './components/team/Team';
import Contact from './components/contact/Contact';




function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/objective" Component={Objective} />
        <Route path="/team" Component={Team} />
        <Route path="/contact" Component={Contact } />

      </Routes>
    </>
  );
}

export default App;
