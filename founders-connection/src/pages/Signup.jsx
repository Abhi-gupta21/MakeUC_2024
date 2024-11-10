import React, { useState } from 'react';  // Import useState
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import Signupform from '../components/Signupform';

const Signup = () => {
  

  return (
    <div className='wrapper min-h-screen flex flex-col'>
      <Navbar />
      
      <Signupform className="flex-grow" />
      
      <Footer />
    </div>
  );
};

export default Signup;
