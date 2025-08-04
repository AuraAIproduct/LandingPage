import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DemoRequest from './components/DemoRequest';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="h-48 bg-black"></div>
      <Hero />
      <DemoRequest />
      <About />
      <Footer />
    </div>
  );
}

export default App;