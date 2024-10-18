import React from 'react'
import { Link } from 'react-router-dom'
import Courses from '../components/Courses'

function CoursePage() {
    return (
        <>
         <div className='w-100 border shadow d-flex justify-content-center align-items-center' style={{ height: '200px', backgroundImage: 'linear-gradient(to right,rgba(201, 168, 121, 0.512) , rgba(144, 176, 114)  ' }}>
          <Link to='/' className='me-3 fs-3' style={{ textDecoration: 'none', color: 'white' }}>

            <img src="https://cdn-icons-png.flaticon.com/256/919/919312.png" alt="" width={'45px'} />
          </Link>

          <div>
            <h1 className='' style={{ fontSize: '50px', color: 'white' }} >Courses </h1>
          </div>
        </div>
        <Courses/>
           
        </>

    )
}

export default CoursePage