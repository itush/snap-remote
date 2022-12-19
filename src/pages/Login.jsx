import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Login = ({setUser}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!name || !email) return;
    setUser({name: name, email: email});
    navigate("/dashboard");
    
  };

  return (
    <div >
      <Navbar />
      <form onSubmit={handleSubmit} className='my-[50%] sm:my-[20%]'>
      <h1 className='text-2xl text-center font-bold lg:text-4xl'>Login to Dashboard </h1>
      <div className="input-1 w-[80%] mx-auto my-4">

      <label htmlFor='name'></label>
      <input type='text' id='name' value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} className="bg-gray-300 w-[100%] font-bold rounded-md p-2"/>
      </div>

      <div className="input-2 w-[80%] mx-auto my-4">
      <label htmlFor='email'></label>
      <input type='email' id='email' value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} className="bg-gray-300 w-[100%] font-bold rounded-md p-2"/>
      </div>

      <button type='submit' className='block bg-AlmostBlack text-AlmostWhite w-1/3 mx-auto p-2 my-4 rounded-lg font-bold hover:bg-AlmostWhite hover:text-AlmostBlack hover:border-2 hover:border-AlmostBlack '>Login</button>
      </form>
      <Footer />
      </div>
  )
}

export default Login;