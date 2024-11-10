import react from 'React'

const Footer = () => {
    return (
        <div className="footer p-6 bg-black bg-opacity-30 text-black">
    <div className="container mx-auto text-center">
        <p className="text-sm md:text-base mb-4">Copyright © 2023 - All rights reserved</p>
        <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Contact Us</a>
        </div>
        <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-gray-400 transition duration-300">
                
            </a>
            <a href="#" className="hover:text-gray-400 transition duration-300">
                
            </a>
            <a href="#" className="hover:text-gray-400 transition duration-300">
                
            </a>
        </div>
    </div>
</div>

    )
}

export default Footer;