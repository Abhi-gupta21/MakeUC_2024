import React from 'react';  // Import useState
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';

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
