import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
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
      <div id="big-nav-bar" className='flex items-center lg:space-x-44 lg:font-bold '>

        <div id='logo-container' className='lg:w-full' >
          <Link to="/">
          <img src={snapLogo} alt="snap-logo" />
          </Link>
        </div>

        <div id="big-nav-links1" className='hidden w-[60%] lg:block '>
          <ul className='flex justify-between lg:space-x-8 xl:-ml-40'>
            <li className='relative '>
              <button onClick={handleFeatBtn} className="flex items-baseline text-MediumGray hover:text-black" >Features
                <img src={featBtn ? uArrow : dArrow} alt="u-d-arrow" />
              </button>
              {featBtn ? <ul className='my-2 absolute w-[200%] p-4 ml-[-100%] bg-white rounded-lg drop-shadow-2xl space-y-2'>
                <li className='flex space-x-2'>
                  <img src={todoIcon} alt="todo-ico" />
                  <h6>Todo List</h6>
                </li>
                <li className='flex space-x-2'>
                  <img src={calIcon} alt="cal-ico" />
                  <h6>Calender</h6>
                </li>
                <li className='flex space-x-2'>
                  <img src={remIcon} alt="rem-ico" />
                  <h6>Reminders</h6>
                </li>
                <li className='flex  space-x-2'>
                  <img src={planIcon} alt="plan-ico" />
                  <h6>Planning</h6>
                </li>
              </ul> : <></>

              }
            </li>
            <li className='relative'>
              <button onClick={handleCompBtn} className="flex items-baseline text-MediumGray hover:text-black">Company
                <img src={compBtn ? uArrow : dArrow} alt="u-d-arrow" />
                {compBtn ?
                  <ul className='absolute my-2 w-[160%] p-4 ml-[-20%] mt-[40%] bg-white rounded-lg drop-shadow-2xl space-y-2'>
                    <li className='flex  space-x-2'>
                      <h6>History</h6>
                    </li>
                    <li className='flex  space-x-2'>
                      <h6>Our Team</h6>
                    </li>
                    <li className='flex  space-x-2'>
                      <h6>Blog</h6>
                    </li>
                  </ul> : <></>

                }
              </button>
            </li>
            <li className='text-MediumGray hover:text-black cursor-pointer'>
            <Link to="/careers">Careers</Link>              
              </li>

            <li className='text-MediumGray hover:text-black cursor-pointer'>
              <Link to="/about">About</Link>
              </li>
          </ul>
        </div>

        <div id="big-nav-links2" className='hidden w-[20%] mb-4 text-MedimGray lg:block '>
          <div className="flex items-center space-x-4 mt-4">
            <button className='text-MediumGray hover:text-black xl:ml-[200%] xl2:ml-[350%]'><Link to="/login">Login</Link></button>
            <button className='text-MediumGray hover:text-black border-2 rounded-lg px-4 py-1 border-MediumGray hover:border-black '>Register</button>
          </div>
        </div>

      </div>
      <div onClick={handleMenuBtn} className='block lg:hidden '>
        {menuBtn ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
      </div>


      <div id='small-nav-bar' className={menuBtn ? 'fixed ml-[35%] top-0 w-[60%] h-full p-4 bg-white' : 'fixed left-[-100%]'}>

        <div onClick={handleMenuBtn} className='block w-[10%] ml-[85%] md:ml-[90%] lg:hidden '>
          {menuBtn ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>

        <ul id="small-nav-links1" className='my-8 text-MediumGray'>

          <li>

            <button onClick={handleFeatBtn} className='flex items-baseline'>Features
              <img src={featBtn ? uArrow : dArrow} alt="u-d-arrow" />

            </button>
            {featBtn ? <ul className='my-2 space-y-2'>
              <li className='flex ml-2 space-x-2'>
                <img src={todoIcon} alt="todo-ico" />
                <h6>Todo List</h6>
              </li>
              <li className='flex ml-2 space-x-2'>
                <img src={calIcon} alt="cal-ico" />
                <h6>Calender</h6>
              </li>
              <li className='flex ml-2 space-x-2'>
                <img src={remIcon} alt="rem-ico" />
                <h6>Reminders</h6>
              </li>
              <li className='flex ml-2 space-x-2'>
                <img src={planIcon} alt="plan-ico" />
                <h6>Planning</h6>
              </li>
            </ul> : <></>

            }
          </li>

          <li>
            <button onClick={handleCompBtn} className='flex items-baseline'>Company
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
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div id="small-nav-links2" className='flex flex-col text-MediumGray'>
          <button className=' '><Link to="/login">Login</Link></button>
          <button className='border-2 rounded-lg px-4 mt-4 border-MediumGray '>Register</button>
        </div>

      </div>

    </nav>
  )
}

export default Navbar;