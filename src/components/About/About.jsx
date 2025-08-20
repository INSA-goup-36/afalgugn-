// components/About/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          <p className="text-lg text-gray-600 mb-6">
            We are dedicated to helping reunite missing persons with their loved ones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;