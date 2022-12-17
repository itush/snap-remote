import React from 'react'
import abt from "../assets/images/about.png"
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <Navbar />
    
    <div className='lg:flex lg:flex-row-reverse lg:px-[12.5%]'>
        <section id="abt-part1" className='w-full'>
            <img src={abt} alt="abt-img" />
        </section>

        <section id="abt-part2">
            <h1 className='text-2xl text-center font-bold my-4'>Snap is for everyone!</h1>
            <p className='text-center px-3'>
              An awesome remote workplace created by an awesome team. 
              </p>
            <button className='block bg-AlmostBlack text-AlmostWhite w-1/3 mx-auto p-2 my-4 rounded-lg font-bold hover:bg-AlmostWhite hover:text-AlmostBlack hover:border-2 hover:border-AlmostBlack lg:inline xl:text-2xl xl2:text-3xl xl2:w-1/2 xl2:mt-16'>Know more</button>
        </section>
    </div>
    <Footer />
    </>
  )
}

export default About;