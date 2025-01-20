import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {

 
  
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[7vw]">
        <h5 className=" text-lg font-semibold mb-2">Our people and society</h5>
        <h1 className="text-3xl text-white  md:text-5xl font-bold leading-tight mb-5">
          Best Treatment for <span className="text-white ">Healthy life</span>
        </h1>
       
        <p className="text-sm md:text-base leading-relaxed mb-5">
          Effortlessly empower seamless healthcare solutions with CareBuddy’s holistic virtual clinic platform.
          Dynamically streamline access to personalized care pathways and optimize patient engagement
          for critical health outcomes across all wellness journeys.
        </p>
        <a href="#speciality"className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m auto md:m-0 hover:scale-105 transition-all duration-300">
          Book appointment
          <img src={assets.arrow_icon} alt="arrow icon" className="w-4 h-4" />
        </a>
      </div>

      {/* Right side */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:h-[500px] object-cover rounded-lg"
          src={assets.header_img}
          alt="Header"
        />
      </div>
    </div>
  );
};

export default Header;
