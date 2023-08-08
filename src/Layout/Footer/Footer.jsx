import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pb-6">
      <div className=" mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className='bg-gray-700 p-10'>
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p className="text-sm">
              Address: 123 Main St, City, Country
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@bistroboss.com
            </p>
          </div>
          <div className='bg-gray-800 p-10'>
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
