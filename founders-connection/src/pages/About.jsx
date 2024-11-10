import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
function About() {
    return (
        <div className="wrapper min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">
            <h1>About</h1>
            </div>
            <Footer />
        </div>
    )
}    

export default About;