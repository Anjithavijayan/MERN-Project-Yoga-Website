import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <>
            <div className='container-fluid shadow'>
                <div className='row' style={{ backgroundColor: 'rgba(182, 133, 83, 0.979)' }}>
                    <div className='col-md-1'></div>
                    <div className='col-md-5 mt-3 mb-3  '>
                        <h4 className='text-white'> NuYoga<img src="https://cdn-icons-png.flaticon.com/256/919/919312.png" alt="" width={'35px'} /></h4>
                        <p className=''>Our experienced instructors will guide you through
                            structured lessons,helping you develop a soild foundation while nurturing your  creativity and musical expression.
                        </p>
                        <Link style={{ textDecoration: 'none', color: 'white' }}>
                            <i class="fa-brands fa-instagram  me-5"></i>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }}>
                            <i class="fa-brands fa-facebook  me-5"></i>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }}>
                            <i class="fa-brands fa-twitter me-5"></i>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }}>
                            <i class="fa-brands fa-reddit me-5"></i>
                        </Link>
                    </div>
                    <div className='col-md-2 mt-3 mb-3 d-flex flex-column justify-content-center align-items-center'>
                        <h5 className=''>Services</h5>

                        <Link to='/' target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
                            Home
                        </Link>
                        <Link to='' target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
                            About
                        </Link>
                        <Link to='' target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
                            Excerise
                        </Link>
                    </div>
                    <div className='col-md-2 mt-3 mb-3 d-flex flex-column  justify-content-center'>
                        <h5>Contact Us</h5>
                       <div style={{ textDecoration: 'none', color: 'white' }}>
                       Shri Yogendra Marg, Prabhat Colony,
                       Santacruz East, Mumbai - 400055 India
                       </div>

                    </div>
                    <div className='col-md-2 mt-3 mb-3 d-flex flex-column justify-content-center align-items-center'>
                
                    </div>
                    <div className='col-md-1 mt-5'>
                      
                    </div>

                </div>
             
            </div>
            <div className=' container-fluid d-flex flex-column justify-content-center align-items-center' style={{backgroundColor:'rgba(144, 176, 114, 0.785)'}}>
                    <p>©Nuyoga 2024,All rights are reserved</p>
            </div>

        </>
    )
}

export default Footer


// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Footer.css'


// function Footer() {
//     return (
//         <>
//             <div>
//                 <div className='footer d-flex justify-content-center align-items-center'>
//                     <div className='mt-5 mb-5 col-md-6'>
//                         <div style={{ width: '500px', color: 'white' }}>
//                             <h4 className=''> NuYoga<img src="https://cdn-icons-png.flaticon.com/256/919/919312.png" alt="" width={'35px'} /></h4>
//                             <p style={{ textAlign: 'justify' }} className=''>Our experienced instructors will guide you through
//                                 structured lessons,helping you develop a soild foundation while nurturing your  creativity and musical expression.
//                             </p>
//                         </div>
//                         <div className='d-flex align-items-center mb-3 ' style={{ width: '250px', color: 'white' }}>
//                             <Link style={{ textDecoration: 'none', color: 'white' }}>
//                                 <i class="fa-brands fa-instagram  me-5"></i>
//                             </Link>
//                             <Link style={{ textDecoration: 'none', color: 'white' }}>
//                                 <i class="fa-brands fa-facebook  me-5"></i>
//                             </Link>
//                             <Link style={{ textDecoration: 'none', color: 'white' }}>
//                                 <i class="fa-brands fa-twitter me-5"></i>
//                             </Link>
//                             <Link style={{ textDecoration: 'none', color: 'white' }}>
//                                 <i class="fa-brands fa-reddit me-5"></i>
//                             </Link>
//                         </div>

//                     </div>
//                     <div className='d-flex flex-column ms-5 mt-3 col-md-2' style={{ width: '150px', color: 'white' }}>
//                         <h5 className=''>Services</h5>

//                         <Link to='https://react-bootstrap.netlify.app/' target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
//                             Healthy Diet
//                         </Link>
//                         <Link to='https://www.npmjs.com/package/json-server' target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
//                             Fit To Health
//                         </Link>
//                         <Link to='https://www.npmjs.com/package/json-server' target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
//                             Excerise
//                         </Link>
//                     </div>

//                     <div className='d-flex flex-column ms-5 mt-3 col-md-2' style={{ width: '150px', color: 'white' }}>
//                         <h5 className=''>AboutUs</h5>

//                         <Link to='/dashboard' style={{ textDecoration: 'none', color: 'white' }}>
//                             Careers
//                         </Link>
//                         <Link to='/project' style={{ textDecoration: 'none', color: 'white' }}>
//                             History
//                         </Link>
//                         <Link to='/project' style={{ textDecoration: 'none', color: 'white' }}>
//                             Our Team
//                         </Link>
//                     </div>
//                     <div className='d-flex flex-column ms-5  col-md-2' style={{ width: '150px', color: 'white' }}>
//                         <h5 className=' mt-3'>Support</h5>
//                         <Link to='https://react.dev/' target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
//                             FAQs
//                         </Link>
//                         <Link to='https://react-bootstrap.netlify.app/' target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
//                             Contact
//                         </Link>
//                         <Link to='https://www.npmjs.com/package/json-server' target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
//                             Live Chat
//                         </Link>
//                         <Link to='https://www.npmjs.com/package/json-server' target="_blank" style={{ textDecoration: 'none', color: 'white' }}>

//                         </Link>
//                     </div>

//                 </div>
//                 <div className='footer1 d-flex justify-content-center align-items-center' >

//                     <p  className='mt-3' style={{ color: 'white' }}>All rights are reserved</p>

//                 </div>

//             </div>
//         </>
//     )
// }

// export default Footer