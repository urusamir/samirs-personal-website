import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Protocol from './components/Protocol';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import ToolSlider from './components/ToolSlider';
import Pricing from './components/Pricing';
import CalendarEmbed from './components/CalendarEmbed';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#000000]">
      <Navbar />
      <Hero />
      <ToolSlider />
      <Protocol />
      <Pricing />
      <GetStarted />
      <CalendarEmbed />
      <Footer />
    </div>
  );
}

export default App;
