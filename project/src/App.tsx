import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoRequest from './components/DemoRequest';
import About from './components/About';
import Footer from './components/Footer';
import Videos from './components/Videos';

function HomePage() {
  useEffect(() => {
    // Handle hash navigation when component mounts
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Remove the # symbol
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure components are rendered
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="h-16 bg-black"></div>
      <Hero />
      <Features />
      <DemoRequest />
      <About />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos" element={
          <div className="min-h-screen">
            <Header />
            <div className="h-16 bg-black"></div>
            <Videos />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;