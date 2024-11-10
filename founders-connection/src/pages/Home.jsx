import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';


function Home() {
  return (
      <div className="wrapper min-h-screen flex flex-col">
        <Navbar />
        <Hero className="flex-grow"/>
        <Footer />
      </div>
  );
}

export default Home;