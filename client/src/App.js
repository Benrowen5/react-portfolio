import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

function App() { 
      // Default state is About page
      const [currentPage, setCurrentPage] = useState('About');

      const renderPage = () => {
          switch (currentPage) {
              case 'About':
                  return <About />;
              case 'Projects':
                  return <Projects />;
              case 'Contact':
                  return <Contact />;
              case 'Resume':
                  return <Resume />;
              default:
                  return <Home />;
          }
      };
  
  return (
    <div className="wrapper">
      <Nav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        {renderPage(currentPage)}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App;
