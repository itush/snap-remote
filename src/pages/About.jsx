import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <Navbar />
    
    <div >     

        <section id="abt" className='flex flex-col space-y-8 my-[50%] sm:my-[20%]'>
            <h1 className='text-2xl text-center font-bold lg:text-4xl'>Snap is for everyone!</h1>
            <p className='text-center px-3 lg:text-2xl'>
              A fantastic remote workplace created by a fantastic team. 
              </p>
            <button className='block bg-AlmostBlack text-AlmostWhite w-1/3 mx-auto p-2 my-4 rounded-lg font-bold hover:bg-AlmostWhite hover:text-AlmostBlack hover:border-2 hover:border-AlmostBlack '>Team</button>
        </section>
    </div>
    <Footer />
    </>
  )
}

export default About;