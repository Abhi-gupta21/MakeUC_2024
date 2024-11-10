import React from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
function About() {
    return (
        <div className="wrapper min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-grow grid grid-cols-2 gap-4 justify-center p-20 grid-gap-20 rounded-xl">
                <div className="grid-container bg-gray-400 shadow-lg border-radius-lg rounded-3xl text-center">
                    <h2 className="text-2xl font-semibold text-center mb-6 p-4 font-size-xl">Who we are?</h2>
                    <p className='text-xl align-center p-10 text-center'>Founded by a passionate team of entrepreneurs, mentors, and former F-1 students, we understand the unique challenges faced by international graduates who want to launch their own businesses. Our platform is designed to simplify the startup journey for F-1 students and international founders by connecting them with resources, mentorship, and community support tailored specifically to their needs.</p>
                </div>
                <div className="grid-container bg-gray-400 shadow-lg rounded-3xl">
                    <h2 className="text-2xl font-semibold text-center mb-6 p-4">Our Mission </h2>
                    <p className='text-xl align-center p-10 text-center'>To empower F-1 students and international graduates with the guidance, tools, and networks needed to turn their entrepreneurial dreams into reality. We believe in creating an inclusive startup ecosystem that supports the ambitions of international founders and removes the barriers they face.</p>
                </div>
                <div className="grid-container bg-gray-400 shadow-lg rounded-3xl">
                    <h2 className="text-2xl font-semibold text-center mb-6 p-4">What we do</h2>
                    <p className='text-xl align-center p-10 text-center'>TOur platform offers a comprehensive suite of resources to make the startup process easier and more accessible for international founders. From guides on legal requirements and visa pathways to mentorship matching and investor connections, we provide everything aspiring founders need in one place. Our community-based approach ensures that users can connect, collaborate, and learn from each other’s experiences.
                    </p>
                </div>
                <div className="grid-container bg-gray-400 shadow-lg rounded-3xl">
                    <h2 className="text-2xl font-semibold text-center mb-6 p-4">Our Vision</h2>
                    <p className='text-xl align-center p-10 text-center'>To be the leading platform for international students and graduates in the U.S. who want to start their own businesses, inspiring a new generation of global entrepreneurs. We envision a world where entrepreneurial talent from diverse backgrounds can thrive, create, and contribute to society, no matter where they come from.
                    </p>
                </div>
            
            </div>
            <h1 className='ml-auto mr-auto text-2xl font-semibold text-center mb-4 p-4 align-center justify-center text-5xl text-white'>Our Values</h1>
            <div className="flex items-center justify-center space-between">
                
            <div className="flex items-center space-x-10 h-96">
                <div className="flex h-40 w-60 bg-gray-600 text-center items-center justify-center text-white text-2xl">
                    <p>Collaboration</p>
                </div>
                <div className="flex h-40 w-60 bg-gray-600 text-center items-center justify-center text-white text-2xl">
                    <p>Empowerment</p>
                </div>
                <div className="flex h-40 w-60 bg-gray-600 text-center items-center justify-center text-white text-2xl">
                    <p>Innovation</p>
                </div>
                <div className="flex h-40 w-60 bg-gray-600 text-center items-center justify-center text-white text-2xl">
                    <p>Integrity</p>
                </div>
            </div>


            </div>
            <Footer />
        </div>
    )
}    

export default About;