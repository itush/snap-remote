import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const Careers = () => {
  return (
    <>
    <Navbar />
    <div>
      <h1 className='text-2xl text-center font-bold my-4'>Work with Snap</h1>

      <p className='text-center px-3'>
              Be prepared to be surprised with amazing work opportunities. 
              </p>
            <button className='block bg-AlmostBlack text-AlmostWhite w-1/3 mx-auto p-2 my-4 rounded-lg font-bold hover:bg-AlmostWhite hover:text-AlmostBlack hover:border-2 hover:border-AlmostBlack  xl:text-2xl xl2:text-3xl xl2:w-1/2 xl2:mt-16'>Search Projects</button>

      </div>
    <Footer />
    </>
    
  )
}

export default Careers;