import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';


function Home() {
  
  return (
      <div className="wrapper min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <Chatbot />
        <Footer />
      </div>
  );
}

export default Home; 
