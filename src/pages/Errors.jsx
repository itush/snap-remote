import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Errors = () => {
  return (
    <div>
      <Navbar />
      <h1 className='text-center text-red-900 text-5xl font-extrabold'>Error: 404</h1>
      <p className='text-center text-red-900 text-5xl font-extrabold'>Page Not Found!</p>
      <Footer />
    </div>
  )
}

export default Errors;