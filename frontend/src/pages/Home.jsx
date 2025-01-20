import React from 'react'
import Header from '../component/Header'
import SpecialityMenu from '../component/SpecialityMenu'
import TopDoctors from '../component/TopDoctors'
import Banner from '../component/Banner'
import Service from '../component/Service'

const Home = () => {
  return (
    <div>
        <Header />
        <Service />
        <SpecialityMenu />
        <TopDoctors />
        <Banner/>
    </div>
  )
}

export default Home