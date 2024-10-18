import React from 'react'
import { Link } from 'react-router-dom'
function Contact() {
    return (
        <div>
            <div className='w-100 border shadow d-flex justify-content-center align-items-center' style={{ height: '200px', backgroundImage: 'linear-gradient(to right,rgba(201, 168, 121, 0.512) , rgba(144, 176, 114)  ' }}>
                <Link to='/' className='me-3 fs-3' style={{ textDecoration: 'none', color: 'white' }}>
                    <img src="https://cdn-icons-png.flaticon.com/256/919/919312.png" alt="" width={'45px'} />
                </Link>

                <div>
                    <h1 className='' style={{ fontSize: '50px', color: 'white' }} >Contact Us </h1>
                </div>
            </div>
            <div className='container w-50 text-center mt-4' >
                <p className='fs-5' style={{ color: 'rgba(144, 176, 114)' }} >Our team is happy to answer any questions you have.
                    Fill out the form below, and we’ll be in touch as soon as possible.</p>
            </div>
            <div className='container '>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-6 shadow rounded  ' style={{width:'450px'}}>
                        <input type="text" placeholder='Full Name'className='form-control mb-3 mt-4' />

                        <input type="email" placeholder='Email' className='form-control mb-3'/>

                        <input type="" placeholder='Mobile Number' className='form-control mb-3' />

                        <textarea placeholder='Tell us more about how can i help you...'
                            className='form-control mb-2' style={{ height: '150px' }}></textarea>
                        <button className='btn w-100 text-white mb-4' style={{backgroundColor:' rgba(182, 133, 83, 0.979)'}}>
                            Send Message
                        </button>
                    </div>
                    <div className='col-md-6 d-flex justify-content-center align-items-center '>
                        <img src="https://png.pngtree.com/png-clipart/20240116/original/pngtree-health-yoga-girl-hand-drawn-free-elements-png-image_14123229.png" style={{ height: '400px', width: '450px' }} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact