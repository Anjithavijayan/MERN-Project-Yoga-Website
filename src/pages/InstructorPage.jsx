import React from 'react'
import { Link } from 'react-router-dom'
import Instructors from '../components/Instructors'

function InstructorPage() {
  return (
    <div>
        <div className='w-100 border shadow d-flex justify-content-center align-items-center' style={{ height: '200px', backgroundImage: 'linear-gradient(to right,rgba(201, 168, 121, 0.512) , rgba(144, 176, 114)  ' }}>
        <Link to='/' className='me-3 fs-3' style={{ textDecoration: 'none', color: 'white' }}>

          <img src="https://cdn-icons-png.flaticon.com/256/919/919312.png" alt="" width={'45px'} />
        </Link>

        <div>
          <h1 className='' style={{ fontSize: '50px', color: 'white' }} >Instructors </h1>
        </div>
      </div>
      <div className='container w-50 text-center mt-4' >
        <p className='fs-5'style={{color:'rgba(144, 176, 114)'}} >At Nuyoga, our teachers are experienced and knowledgeable.
          hey live the practice of Yoga and are passionate about supporting you.
          Check below to learn a little bit about them and their journey with Yoga.</p>
      </div>
      <div>
       <Instructors/>
      </div>
    </div>
  )
}

export default InstructorPage