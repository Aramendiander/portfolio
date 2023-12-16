import { useState, useEffect, useRef, createContext } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css';
import Stars from './components/page_one/Stars';
import Presentation from './components/page_one/Presentation';
import Scrollmore from './components/page_one/Scrollmore';
import Works from './components/works/Works';
import Scrolltocv from './components/works/Scrolltocv';


function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const pagesRef = useRef([]);


  useEffect(() => {
    let startY;
    const threshold = 100;

    const handleTouchStart = (event) => {
      startY = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      if (isScrolling) return;

      const endY = event.touches[0].clientY;
      const deltaY = startY - endY;

      if (Math.abs(deltaY) > threshold) {
        setIsScrolling(true);
        if (deltaY > 0 && currentPage < pagesRef.current.length - 1) {
          setCurrentPage(currentPage + 1);
        } else if (deltaY < 0 && currentPage > 0) {
          setCurrentPage(currentPage - 1);
        }
        setTimeout(() => setIsScrolling(false), 1000); // Adjust this value to change the delay
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentPage, isScrolling]);

  useEffect(() => {
    const handleWheel = (event) => {
      if (isScrolling) return;

      if (event.deltaY > 0 && currentPage < pagesRef.current.length - 1) {
        setIsScrolling(true);
        setCurrentPage(currentPage + 1);
      } else if (event.deltaY < 0 && currentPage > 0) {
        setIsScrolling(true);
        setCurrentPage(currentPage - 1);
      }
      setTimeout(() => setIsScrolling(false), 1000);
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentPage, isScrolling]);


  useEffect(() => {
    scrollToPage(currentPage);
  }, [currentPage]);

  const scrollToPage = (index) => {
    scroll.scrollTo(pagesRef.current[index].offsetTop, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });

  };


  const scrollToNextPage = () => {
    setCurrentPage(currentPage + 1);
  }


  return (
    <>
        <div
          className={`page ${currentPage === 0 ? 'active' : ''}`}
          id="page1"
          ref={(el) => (pagesRef.current[0] = el)}
          style={{ position: 'relative' }}
        >
          <Stars />
          <Presentation />
          <Scrollmore onClick={scrollToNextPage} />
        </div>
        <div
          className={`page ${currentPage === 1 ? 'active' : ''}`}
          id="page2"
          ref={(el) => (pagesRef.current[1] = el)}
        >
          <Works />
          
        </div>
        <div
          className={`page ${currentPage === 2 ? 'active' : ''}`}
          id="page3"
          ref={(el) => (pagesRef.current[2] = el)}
        >
          <p>Under construction</p>
        </div>
    </>
  );
}

export default App;


