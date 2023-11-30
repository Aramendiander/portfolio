import { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const pagesRef = useRef([]);

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0 && currentPage < pagesRef.current.length - 1) {
        setCurrentPage(currentPage + 1);
      } else if (event.deltaY < 0 && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentPage]);

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

  return (
    <>
      <div
        className={`page ${currentPage === 0 ? 'active' : ''}`}
        id="page1"
        ref={(el) => (pagesRef.current[0] = el)}
      >
        <p>hello</p>
      </div>
      <div
        className={`page ${currentPage === 1 ? 'active' : ''}`}
        id="page2"
        ref={(el) => (pagesRef.current[1] = el)}
      >
        <p>hallo</p>
      </div>
      <div
        className={`page ${currentPage === 2 ? 'active' : ''}`}
        id="page3"
        ref={(el) => (pagesRef.current[2] = el)}
      >
        <p>hollo</p>
      </div>
    </>
  );
}

export default App;
