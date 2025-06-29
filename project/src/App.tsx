import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DemoRequest from './components/DemoRequest';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="h-48 bg-black"></div>
      <Hero />
      <Features />
      <HowItWorks />
      <DemoRequest />
      <About />
      <Footer />
    </div>
  );
}

export default App;