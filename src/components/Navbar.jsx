import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import snapLogo from '../assets/images/logo.svg';
import dArrow from '../assets/images/icon-arrow-down.svg';
import uArrow from '../assets/images/icon-arrow-up.svg';
import todoIcon from '../assets/images/icon-todo.svg';
import calIcon from '../assets/images/icon-calendar.svg';
import remIcon from '../assets/images/icon-reminders.svg';
import planIcon from '../assets/images/icon-planning.svg';

const Navbar = () => {
  const [menuBtn, setMenuBtn] = useState(false);
  const [featBtn, setFeatBtn] = useState(false);
  const [compBtn, setCompBtn] = useState(false);

  const handleMenuBtn = () => {
    setMenuBtn(!menuBtn);
  };

  const handleFeatBtn = () => {
    setFeatBtn(!featBtn);
  }

  const handleCompBtn = () => {
    setCompBtn(!compBtn);
  }

  return (
    <nav className='flex justify-between items-center space my-4 w-[90%] mx-auto font-semibold'>
      <div id="big-nav-bar" className='flex md:space-x-24 '>

        <div id='logo-container' >
          <img src={snapLogo} alt="snap-logo" />
        </div>

        <div id="big-nav-links1" className='hidden md:block '>
          <ul className='flex justify-between md:space-x-4'>
            <li>Features <button><img src={dArrow} alt="d-arrow" /></button></li>
            <li>Company <button><img src={dArrow} alt="d-arrow" /></button></li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>

        <div id="big-nav-links2" className='hidden md:block md:space-x-4'>
          <button>Login</button>
          <button>Register</button>
        </div>

      </div>
      <div onClick={handleMenuBtn} className='block md:hidden '>
        {menuBtn ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
      </div>


      <div id='small-nav-bar' className={menuBtn ? 'fixed ml-[35%] top-0 w-[60%] h-full p-4 bg-white' : 'fixed left-[-100%]'}>

        <div onClick={handleMenuBtn} className='block w-[10%] ml-[85%] md:hidden '>
          {menuBtn ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>

        <ul id="small-nav-links1" className='my-8 text-MediumGray'>

          <li>
            Features
            <button onClick={handleFeatBtn} className='mx-4'>
              <img src={featBtn ? uArrow : dArrow} alt="u-d-arrow" />

            </button>
            {featBtn ? <ul className='my-2 space-y-2'>
              <li className='flex ml-2 space-x-2'>
                <img src={todoIcon} alt="todo-ico" />
                <h6>Todo List</h6>
              </li>
              <li className='flex ml-2 space-x-2'>
              <img src={calIcon} alt="cal-ico"/> 
                <h6>Calender</h6>
              </li>
              <li className='flex ml-2 space-x-2'>
              <img src={remIcon} alt="rem-ico"/> 
                <h6>Reminders</h6>
              </li>
              <li className='flex ml-2 space-x-2'>
              <img src={planIcon} alt="plan-ico"/> 
                <h6>Planning</h6>
              </li>
            </ul> : <></>

            }
          </li>

          <li>Company
            <button onClick={handleCompBtn} className='mx-4'>
              <img src={compBtn ? uArrow : dArrow} alt="u-d-arrow" />
            </button>
            {compBtn ?
              <ul className='my-2 space-y-2'>
                <li className='flex ml-2 space-x-2'>
                  <h6>History</h6>
                  </li>
                <li className='flex ml-2 space-x-2'>
                  <h6>Our Team</h6>
                  </li>
                <li className='flex ml-2 space-x-2'>
                  <h6>Blog</h6>
                  </li>
              </ul> : <></>

            }
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>

        <div id="small-nav-links2" className='flex flex-col text-MediumGray'>
          <button className=' '>Login</button>
          <button className='border-2 rounded-lg px-4 mt-4 border-MediumGray '>Register</button>
        </div>

      </div>

    </nav>
  )
}

export default Navbar;