import React from 'react';
import Lottie from 'lottie-react';
import searchAnimation from '../assets/search.json'; // download animation from lottiefiles

const EmptyFeed = ({status}) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Lottie animationData={searchAnimation} loop={true} style={{ width: 300, height: 300 }} />
      <p className="text-xl text-gray-600 mt-4">{status}</p>
    </div>
  )
}

export default EmptyFeed;
