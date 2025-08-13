// src/components/Splash.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); // Redirect after 5 seconds
    }, 2000);

    return () => clearTimeout(timer); // cleanup on unmount
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-orange-500 to-orange-700 relative">
      {/* Tinder SVG logo with inline animation */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className="w-32 h-32"
        style={{
          animation: 'pulseScale 2s infinite ease-in-out',
        }}
      >
        <path
          d="M50 5C30 25 30 45 40 60c-10-5-20-15-20-30 0-15 10-25 30-25z"
          fill="white"
        />
      </svg>

      {/* Keyframes injected locally */}
      <style>
        {`
          @keyframes pulseScale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
        `}
      </style>
    </div>
  );
};

export default Splash;
