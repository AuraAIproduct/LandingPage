import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoRequest from './components/DemoRequest';
import About from './components/About';
import Footer from './components/Footer';

function App() {
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

export default App;