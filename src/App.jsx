import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Protocol from './components/Protocol';
import Footer from './components/Footer';
import ToolSlider from './components/ToolSlider';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CalendarEmbed from './components/CalendarEmbed';

function App() {
  return (
    <div className="relative w-full max-w-[100vw] overflow-x-hidden min-h-screen bg-[#000000]">
      <Navbar />
      <Hero />
      <ToolSlider />
      <Protocol />
      <Pricing />
      <FAQ />
      <CalendarEmbed />
      <Footer />
    </div>
  );
}

export default App;
