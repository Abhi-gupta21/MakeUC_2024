import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Loginform = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');  // State for error messages
    const [auth, setAuth] = useState(false);  // State to track authentication
    const navigate = useNavigate();  // Navigation hook

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',  // Make sure this matches your backend requirement
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                setAuth(true);  // Set auth to true on successful login
                navigate('/People'); // Redirect to the Home page
            } else {
                throw new Error(`Login failed! ${response.status}`);
            }
        } catch (err) {
            setError(err.message);  // Display error message
        }
    };

    // Show different content based on auth state
    function showpage() {
        if (auth) {
            return <People />;
        } else {
            return (
                <form onSubmit={handleSubmit} className='max-w-2xl mx-auto bg-black bg-opacity-30 shadow-lg m-auto p-8 rounded-lg w-full shadow-lg'>
                    <h2 className='text-2xl font-semibold text-center mb-6'>Login</h2>

                    <div className='mb-4 flex'>
                        <label className='block text-lg font-medium text-gray-700 m-5'>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className='border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <div className='mb-6 flex'>
                        <label className='block text-lg font-medium text-gray-700 m-5'>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className='border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className='w-[100px] bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                            Login
                        </button>
                    </div>
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                </form>
            );
        }
    }

    return (
        <div>
            {showpage()}
        </div>
    );
};

export default Loginform;
