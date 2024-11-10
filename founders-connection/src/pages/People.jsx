import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const People = () => {
    return (
        <div className="wrapper min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center align-center justify-center p-8">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-semibold text-center mb-10">Successful Founders</h1>

                    {/* First founder */}
                    <div className="flex items-center align-center justify-center mb-8">
                        <img 
                            src="https://media.licdn.com/dms/image/v2/D4E03AQEjOSdXq9nLrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724338193003?e=2147483647&v=beta&t=vqVf20MsQgGQ6s9C7ri2vj8srVT6uQsfbvKKBQmcGcI" 
                            alt="Aditya" 
                            className="w-24 h-24 rounded-full border-4 border-green-500 mr-6"
                        />
                        <div className="founder-info">
                            <h2 className="text-2xl font-semibold">Aditya</h2>
                            <p className="text-lg text-gray-600">Founder of Fountane</p>
                        </div>
                    </div>

                    {/* Second founder */}
                    <div className="flex items-center align-center justify-center mb-8">
                        <img 
                            src="https://mastersofscale.com/wp-content/uploads/2022/09/RR_ApoorvaMehta_colorcutout-600x600.webp" 
                            alt="Apoorva Mehta" 
                            className="w-24 h-24 rounded-full border-4 border-green-500 mr-6" 
                        />
                        <div className="founder-info">
                            <h2 className="text-2xl font-semibold">Apoorva Mehta</h2>
                            <p className="text-lg text-gray-600">Founder of Instacart</p>
                        </div>
                    </div>

                    {/* Third founder */}
                    <div className="flex items-center align-center justify-center mb-8">
                        <img 
                            src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTd-4Qsby_vtW2mxS8H1SdRteljqn1vTks9Hndzn3oEYHAlSP5qxCqUi3ygVmQqaaFwbkZtqto1xWBQbDc" 
                            alt="Naval Ravikanth" 
                            className="w-24 h-24 rounded-full border-4 border-green-500 mr-6" 
                        />
                        <div className="founder-info">
                            <h2 className="text-2xl font-semibold">Naval Ravikanth</h2>
                            <p className="text-lg text-gray-600">Founder of AngelList</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default People;
