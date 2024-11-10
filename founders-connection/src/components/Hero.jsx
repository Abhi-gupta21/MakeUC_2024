import React from 'react'

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className='text-center '>
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">Excited to start your new start-up? need guidance from existing founders?You have come to the right place.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}       

export default Hero;