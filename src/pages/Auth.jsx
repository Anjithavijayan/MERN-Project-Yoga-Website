import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import home_image from '../assets/login3.jpg'

function Auth({ register }) {
  const registerForm = register ? true : false;
  return (
    <>
      <div className='d-flex justify-content-center align-items-center  ' style={{ width: '100%', height: '90vh' }}>
        <div className='container w-75 '>
          <div>
            <Link to={'/'} ><button className='btn  border shadow' style={{ color: 'white', borderRadius: '50%',backgroundColor:'rgb(65, 80, 52)' }}><i class="fa-solid fa-arrow-left-long"></i></button></Link>
          </div>
          <div>
            <Row className='border shadow mt-5' style={{borderRadius:'10px'}}>
              <Col md={6} className='p-4 d-flex justify-content-center' style={{ borderRadius:'10px',backgroundImage: ' linear-gradient(to right,rgba(144, 176, 114),rgba(201, 168, 121, 0.512)  )' }}>
                <form style={{width:"75%"}}>
                  <h5 className='text-center'>NUYOGA<img src="https://cdn-icons-png.flaticon.com/256/919/919312.png" alt=""  width={'30px'}/></h5>
                  {
                    registerForm ?
                      <>
                        <h6 className='text-center mb-3 mt-4'>Sign Up To Your Account</h6>
                        <input type="text" placeholder='Name' className='form-control rounded mb-3'
            
                          />
                      </>
                      :
                      <h6 className='text-center mb-3 mt-4'>Sign In to Your Account</h6>

                  }
                  <div className='mb-3 mt-3'>
                    <input type="email" placeholder='Email Id'  className='form-control rounded'  />
                  </div>
                  <div className='mb-3'>
                    <input type="password" placeholder='Password'  className='form-control rounded' />
                  </div>
                  {
                    registerForm?
                    <div>
                      <button className='btn w-100 rounded' style={{backgroundColor:' rgba(182, 133, 83, 0.979)'}}>REGISTER</button>
                      <p className='mt-3'>Already a user?  Click here to<Link to={'/login'} className='ms-2' style={{textDecoration:'none'}}>LogIn</Link></p>
                    </div>:
                    <div>
                      <button className='btn w-100 rounded' style={{backgroundColor:' rgba(182, 133, 83, 0.979)'}}>LOGIN</button>
                      <p className='mt-3'>Not Registered Yet? Click Here To <Link to={'/register'} className='ms-2' style={{textDecoration:'none'}}>Register</Link></p>
                    </div>
                  }
              
                </form>
              </Col>
              <Col md={6} className='p-4 d-flex justify-content-center align-items-center' style={{borderRadius:'10px'}} >
                <img src={home_image} alt="" style={{ width: '400px', zIndex: '-1' }} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth