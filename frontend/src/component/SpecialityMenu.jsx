import React from 'react'
import {specialityData} from "../assets/assets"
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id="speciality" className='flex flex-col items-center gap-4 py- text-gray-800' >
        <h1 className='text-3xl font-medium text-blue-800'>Locate specialization</h1>
        <p className='sm:w-1/3 text-center text-sm'>Easily discover and connect with healthcare specialists tailored to your needs.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scrool'>
            {specialityData.map((item,index)=>(
                <Link key={index} to={`/doctors/${item.speciality}`} onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
                    <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu