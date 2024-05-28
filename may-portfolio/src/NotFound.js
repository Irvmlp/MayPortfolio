// src/components/NotFound.js
import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

const LazyProgressDark = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/404.js'));

const NotFound = () => {
  return (
    <div className="not-found-container2 flex items-center justify-center w-full h-screen bg-[#2C363D]">
      <div className='w-1/3 text-center'>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyProgressDark className='w-full h-auto mb-8' /> 
        </Suspense>
        <p className='text-white font-bold mt-12 font-sans text-2xl'>Page Not Found</p>
        <Link className='bg-gray-900 py-4 px-6 mt-8 inline-block rounded-lg text-white text-xl font-bold' to="/">Go back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
