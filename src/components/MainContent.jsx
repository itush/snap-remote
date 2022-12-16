import React, { useState } from 'react';
import heroM from '../assets/images/image-hero-mobile.png';
import heroD from '../assets/images/image-hero-desktop.png';
import dBiz from '../assets/images/client-databiz.svg';
import audP from '../assets/images/client-audiophile.svg';
import cMeet from '../assets/images/client-meet.svg';
import cMkr from '../assets/images/client-maker.svg';

const MainContent = () => {
  return (
    <div className='lg:flex lg:flex-row-reverse lg:px-[12.5%]'>
      <section>
        <img src={heroM} alt="heroM" className='lg:hidden'/>
        <img src={heroD} alt="heroD" className='hidden lg:block' />
      </section>
      <section className='my-4'>

        <h1 className='text-2xl text-center font-bold my-4 vvsm:text-3xl sm:text-4xl lg:text-left lg:text-6xl '>Make remote work</h1>

        <p className='text-center px-3 md:text-1xl sm:px-16 md:px-32 lg:text-left lg:px-0 lg:my-8'>Get your team in sync, no matter your location. Streamline processes,create team rituals, and watch productivity soar.</p>

        <button className='block bg-AlmostBlack text-AlmostWhite w-1/3 mx-auto p-2 my-4 rounded-lg font-bold lg:inline'>
          Learn more
        </button>

        <div id="clients" className='flex justify-between space-x-2 px-2 my-8 lg:mt-24'>
          <img src={dBiz} alt="d-biz" className='w-1/5' />
          <img src={audP} alt="aud-p" className='w-1/5' />
          <img src={cMeet} alt="c-meet" className='w-1/5' />
          <img src={cMkr} alt="c-mkr" className='w-1/5' />
        </div>
      </section>
    </div>
  )
}

export default MainContent;