import React from 'react'
import {assets} from "../assets/assets"
const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-gray-500'>
          <p className='text-gray-700 font-medium'>ABOUT <span>US</span></p>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Welcome to CareBuddy, your trusted partner in modern healthcare. At CareBuddy, we are passionate about bridging the gap between patients and healthcare professionals by leveraging technology to deliver seamless and personalized medical experiences.</p>
            <p>Our mission is to empower individuals to take control of their health through a platform that connects users with expert doctors, maintains comprehensive health records, and provides a holistic approach to well-being—all from the comfort of your home.</p>
            <p>With a focus on accessibility, innovation, and care, we ensure that every interaction is meaningful, secure, and tailored to your needs. Whether it’s a routine consultation, ongoing health monitoring, or urgent medical advice, CareBuddy is here to support you every step of the way.</p>
            <p>Together, let's redefine healthcare for a healthier tomorrow.</p>
            <b className='text-gray-800'>Our Vision</b>
            <p>At CareBuddy, our vision is to revolutionize healthcare by creating a world where quality medical care is accessible to everyone, anytime, anywhere. We aspire to be a catalyst for change, empowering individuals to take charge of their health through innovative technology, compassionate service, and holistic solutions.</p>
            <p>We envision a future where healthcare is no longer a challenge but a seamless part of everyday life—integrating cutting-edge advancements with personalized human touch to improve lives and foster well-being for all.</p>
            <p>CareBuddy is committed to shaping a healthier, more connected world where everyone has the opportunity to thrive.</p>
          </div>
        </div>
        <div className='text-xl my-4'>
          <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
        </div>

        <div className='flex flex-col md:flex-row mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duratio-300 text-gray-600 cursor-pointer'>
            <b>Efficiency:</b>
            <p>CareBuddy simplifies healthcare with quick appointments, seamless connections to experts, and instant access to records, saving you time and ensuring timely care.</p>
          </div>
          <div  className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duratio-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>CareBuddy brings healthcare to your fingertips with easy scheduling, virtual consultations, and access to health records anytime, anywhere.</p>
          </div>
          <div  className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duratio-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>CareBuddy tailors healthcare to your unique needs, connecting you with expert professionals and customized solutions for your well-being.</p>
          </div>
        </div>

    </div>
  )
}

export default About