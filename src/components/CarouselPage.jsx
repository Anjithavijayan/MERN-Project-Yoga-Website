import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import home_image1 from '../assets/img5.jpg'
import home_image from '../assets/img8.jpg'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function CarouselPage() {
   
    return (
        <div >
            <Carousel>

                <Carousel.Item >

                    <img
                        className="d-block w-100" style={{ height: '726px', opacity: '85%' }}
                        src={home_image}
                        alt="first slide"
                    />

                    <Carousel.Caption >

                        <h1 className='d-flex' style={{ color: 'white', fontSize: '70px' }}>Serenity is</h1>
                        <h1 className='d-flex mt-3' style={{ color: 'white', fontSize: '70px' }}>inside you</h1>
                        <p className='d-flex mb-5 mt-5 ' style={{ color: 'white', fontSize: '20px' }} >Control your body to free your soul</p>
                        <div className='d-flex'>
                            <Link to={'/login'} style={{textDecoration:'none'}}>
                                <Button className='btn d-flex ps-3 pe-3 pt-2 pb-2 mb-5 border border-outline ' style={{ border: 'none', fontSize: '18px', borderRadius: "50px", color: 'white', background: 'none', backgroundColor: 'rgba(182, 133, 83)' }}>JOIN TODAY</Button>
                            </Link>
                            <Link to={'/Courses'} style={{textDecoration:'none'}}>
                                <Button className=' btn d-flex ps-3 pe-3 pt-2 pb-2 mb-5 ms-4 border border-outline  ' style={{ border: 'none', fontSize: '18px', borderRadius: "50px", color: 'white', background: 'none'}}>VIEW COURSES</Button>
                            </Link>
                          
                        </div>

                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item >
                    <img
                        className="d-block w-100" style={{ height: '726px', opacity: '85%' }}
                        src={home_image1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1 className='d-flex' style={{ color: 'white', fontSize: '70px' }}>Serenity is</h1>
                        <h1 className='d-flex mt-3' style={{ color: 'white', fontSize: '70px' }}> inside you</h1>
                        <p className='d-flex mb-5 mt-5 ' style={{ color: 'white', fontSize: '20px' }} >Control your body to free your soul</p>
                        <div className='d-flex'>
                            <Link to={'/login'} style={{ textDecoration: 'none' }}>
                                <Button className='d-flex ps-3 pe-3 pt-2 pb-2 mb-5 border border-outline ' style={{ border: 'none', fontSize: '18px', borderRadius: "50px", color: 'white', background: 'none', backgroundColor: 'rgba(182, 133, 83)' }}>JOIN TODAY</Button>
                            </Link>
                            <Link to={'/Courses'} style={{ textDecoration: 'none' }}>
                                <Button variant="outline-light" className='d-flex ps-3 pe-3 pt-2 pb-2 mb-5 ms-4 border border-outline  ' style={{ border: 'none', fontSize: '18px', borderRadius: "50px", color: 'white', background: 'none' }}>VIEW COURSES</Button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel></div>
    )
}

export default CarouselPage



