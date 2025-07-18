import React from 'react';

import './App.css';
import Navbar from './COMPONENTS/Navbar';
import Home from './COMPONENTS/Home';
import About from './COMPONENTS/About';
import Skills from './COMPONENTS/Skills';
import Projects from './COMPONENTS/Projects';
import Contact from './COMPONENTS/Contact';
import Footer from './COMPONENTS/Footer';

const App = () => {
  return (
    <div className="app-container">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
