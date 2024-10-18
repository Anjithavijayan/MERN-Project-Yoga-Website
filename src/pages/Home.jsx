import React from 'react'
import CarouselPage from '../components/CarouselPage'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AboutYoga from '../components/AboutYoga'
import Instructors from '../components/Instructors'
import Courses from '../components/Courses'




function Home() {
  return (
    <>
      <Header />
      <CarouselPage />
      <AboutYoga />
      {/* Quote */}
      <div className='p-5 shadow' style={{backgroundColor:'rgba(202, 224, 181, 0.437)'}}>
        <h5 className='d-flex justify-content-center align-items-center' style={{color:' rgba(63, 110, 20, 0.76)'}}>❝YOGA IS THE JOURNEY OF THE SELF, THROUGH THE SELF,TO THE SELF.❞</h5>
        <p className='d-flex justify-content-center align-items-center '>-The Bhagavad gita</p>
      </div>
      <div className='mt-5'>
        <h3 className='d-flex text-center align-items-center justify-content-center '>Our Yoga Courses</h3>
        <div className='d-flex text-center justify-content-center '>
          <div class="line" style={{ height: '4px', width: '200px', backgroundColor: 'orange' }}></div>
        </div>
      </div>
      <Courses />
      <div>
        <h3 className='d-flex text-center align-items-center justify-content-center '>Our Instructors</h3>
        <div className='d-flex text-center justify-content-center '>
          <div class="line" style={{ height: '4px', width: '200px', backgroundColor: 'orange' }}></div>
        </div>
      </div>
      <Instructors />
      <Footer />
    </>

  )
}

export default Home