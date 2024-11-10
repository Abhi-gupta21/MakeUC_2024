import React from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import Loginform from '../components/Loginform';
const Login = () => {
    return (
        <div className="wrapper min-h-screen flex flex-col">
            <Navbar />
        <Loginform className="flex-grow" />
        <Footer />
        </div>
    );
};

export default Login;