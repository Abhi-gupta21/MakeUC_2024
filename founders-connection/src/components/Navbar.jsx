import React, { useState } from 'react'; // Import useState for state management
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  // Define state to toggle mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar p-4 bg-black bg-opacity-30 border-black shadow-lg">
      {/* Mobile Toggle Button */}
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">My App</div>
        
        {/* Mobile menu toggle */}
        <button 
          className="lg:hidden text-white" 
          onClick={toggleMenu} 
          aria-label={isOpen ? 'Close menu' : 'Open menu'} // Accessibility improvement
        >
          {/* Toggle between hamburger and close icons */}
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Menu Links */}
      <ul 
        className={`flex lg:flex-row flex-col lg:space-x-8 space-y-4 lg:space-y-0 text-black justify-center font-bold text-xl mt-4 lg:mt-0 ${isOpen ? 'hidden' : 'flex'}`}
      >
        {/* Home Link */}
        <li className="transition-all duration-300 ease-in-out hover:bg-black hover:bg-opacity-50 hover:text-white hover:rounded-md hover:shadow-lg hover:scale-105 px-4 py-2">
          <Link to="/" className="block">Home</Link>
        </li>
        
        {/* About Link */}
        <li className="transition-all duration-300 ease-in-out hover:bg-black hover:bg-opacity-50 hover:text-white hover:rounded-md hover:shadow-lg hover:scale-105 px-4 py-2">
          <Link to="/about" className="block">About</Link>
        </li>
        
        {/* Login Link */}
        <li className="transition-all duration-300 ease-in-out hover:bg-black hover:bg-opacity-50 hover:text-white hover:rounded-md hover:shadow-lg hover:scale-105 px-4 py-2">
          <Link to="/login" className="block">Log in</Link>
        </li>
        
        {/* Sign up Link */}
        <li className="transition-all duration-300 ease-in-out hover:bg-black hover:bg-opacity-50 hover:text-white hover:rounded-md hover:shadow-lg hover:scale-105 px-4 py-2">
          <Link to="/signup" className="block">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
