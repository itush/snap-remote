import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Dashboard = ({user}) => {
  return (
    <div>
      <Navbar />
      <section className='my-[50%] sm:my-[20%]'>
       {user?.name}'s Dashboard!
      </section>
      <Footer />
      </div>
  )
}

export default Dashboard;