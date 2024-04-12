import { useState, useEffect, useRef, createContext } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css';
import Stars from './components/page_one/Stars';
import Presentation from './components/page_one/Presentation';
import Scrollmore from './components/page_one/Scrollmore';
import Works from './components/works/Works';
import Scrolltocv from './components/works/Scrolltocv';
import AboutMe from './components/aboutme/AboutMe';
import Contact from './components/contact/Contact';


function App() {



  return (
    <>
        <div
        >
          <Stars />
          <Presentation />
        </div>
        <div

        >
          <AboutMe />
          
        </div>
        <div

        >
          <Works />
        </div>
        <div

        >
          <Contact />
        </div>
    </>
  );
}

export default App;


