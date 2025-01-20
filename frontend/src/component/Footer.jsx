import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const navigateAndScrollToTop = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='md:mx-10'>

    
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >
        {/*----left section---- */}
        <div >
        <div class="logo text-2xl text-blue-600 font-bold">
        <span>Care</span><strong>Buddy</strong></div>
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Your health, our priority. <br />Stay connected with top doctors through our app</p>
        </div>
             {/*----center section---- */}
        <div>
           <p className='text-xl font-medium mb-5'>COMPANY</p>
           <ul className='flex flex-col gap-2 text-gray-600'>
            <NavLink to="/"><li  onClick={() => navigateAndScrollToTop('/')}>Home</li></NavLink>
            <NavLink to="/about"><li  onClick={() => navigateAndScrollToTop('/about')}>About us</li></NavLink>
            <NavLink to="/contact"><li  onClick={() => navigateAndScrollToTop('/contact')}>Contact us</li></NavLink>
            <li>Privacy policy</li>
           </ul>
        </div>

                {/*----center section---- */}
                <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul  className='flex flex-col gap-2 text-gray-600'>
                <li>+234 90 2537 5109</li>
                <li>carebuddy@info.com</li>
            </ul>
           </div>
           <div>
            {/* {copyright text} */}
           
           </div>
         
    </div>
    <hr />
    <p className='py-5 text-sm text-center items-center'> Copyright 2025@ carebuddy- All Right Reserved.</p>
    </div>
  )
}

export default Footer