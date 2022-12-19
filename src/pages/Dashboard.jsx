import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Dashboard = ({ user }) => {
  return (
    <div>
      <Navbar />
      <section className='flex flex-col space-y-8 my-[50%] sm:my-[20%]'>
        <h1 className='text-2xl text-center font-bold lg:text-4xl'> {user?.name}'s Dashboard!</h1>
        <p className='text-center px-3 lg:text-2xl'> Hello {user?.name}😀 What are you building today? </p>

        <button className='block bg-AlmostBlack text-AlmostWhite w-1/3 mx-auto p-2 my-4 rounded-lg font-bold hover:bg-AlmostWhite hover:text-AlmostBlack hover:border-2 hover:border-AlmostBlack '>Build</button>
      </section>
      <Footer />
    </div>
  )
}

export default Dashboard;