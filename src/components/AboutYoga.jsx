import React from 'react'
import home_image from '../assets/img4.jpg'

function AboutYoga() {
    return (
        <>
            <div className='container-fluid'>
               
                <h6 className='d-flex justify-content-center align-items-center mt-5 ' style={{color:'orange'}}>**Yoga Benefits**</h6>
                <h3 className='d-flex justify-content-center align-items-center mt-3 '>Yoga Can Help You</h3>
                <div className='d-flex text-center justify-content-center '>
                <div class="line" style={{height:'4px',width:'200px',backgroundColor:'orange'}}></div>
                </div>
                
                <div className='row '>
                    <div className='col-md-2'></div>
                    <div className='col-md-4 d-flex justify-content-center align-items-center'>
                        <form action="">
                            <ul className='fs-5' style={{listStyle:'circle'}} >
                                <li className='mb-2'>Ease & Reduce Pain</li>
                                <li  className='mb-2'>Improve Flexibility</li>
                                <li  className='mb-2'>Reduce Stress & anxiety</li>
                                <li  className='mb-2'>Sleep Better</li>
                                <li>Incase Muscle Strength</li>
                            </ul>
                        </form>
                    </div>
                    <div className='col-md-4 d-flex justify-content-center align-items-center'>
                        <img src={home_image} style={{ width: '420px' }} alt="" />
                    </div>
                    <div className='col-md-2'></div>
                </div>

            </div>



        </>





    )
}

export default AboutYoga