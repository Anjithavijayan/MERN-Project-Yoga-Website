import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <>
      <div>
        <div className='w-100 border shadow d-flex justify-content-center align-items-center' style={{ height: '200px', backgroundImage: 'linear-gradient(to right,rgba(201, 168, 121, 0.512) , rgba(144, 176, 114)  ' }}>
          <Link to='/' className='me-3 fs-3' style={{ textDecoration: 'none', color: 'white' }}>

            <img src="https://cdn-icons-png.flaticon.com/256/919/919312.png" alt="" width={'45px'} />
          </Link>

          <div>
            <h1 className='' style={{ fontSize: '50px', color: 'white' }} >Overview </h1>
          </div>
        </div>

        <div>
          <p>Located in beautiful Qualicum Beach, BC, we’re here to support your journey through life with Yoga. Led by experienced teachers who live and breathe Yoga, we have a wide variety of class styles suitable for all bodies and all levels of practitioners. See you in class!</p>
        </div>
      </div>
    </>

  )
}

export default About