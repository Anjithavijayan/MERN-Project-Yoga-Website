import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import home_image from '../assets/img6.jpg'
import home_image1 from '../assets/img7.webp'
import home_image2 from '../assets/img9.jpg'
import home_image3 from '../assets/img10.jpg'
import { Link } from 'react-router-dom';
function Courses() {
    return (
        <div className='container'>



            <div className='row d-flex text-center justify-content-center'>
                <div className='col-md-3 d-flex justify-content-center  mt-5 mb-5 '>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={home_image} style={{ height: '160px' }} />
                        <Card.Body className=' justify-content-center' >

                            <Card.Title>Yoga Asana Regular Classes - (Men & Women) - Online Yoga Classes</Card.Title>
                            <Card.Text>
                                Explore the world of Yoga asanas, practices from the comfort of your own home...
                            </Card.Text>
                         
                                <Link to={'/'}>
                                    <Button className='border border-outline border-2 shadow' style={{ backgroundColor: ' rgba(144, 176, 114)' }}>View More</Button>
                                </Link>
                       

                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-3 d-flex justify-content-center mt-5 mb-5'>
                    <Card className="shadow " style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={home_image1} style={{ height: '160px' }} />
                        <Card.Body className=' justify-content-center'>

                            <Card.Title className='mb-4'>Healing Yoga Movement & Rhythm - Online</Card.Title>
                            <Card.Text >
                                A movement-based therapy programme for stress management, emotional well-being..
                            </Card.Text>
                            

                                <Link>
                                    <Button className='border border-outline border-2 shadow mt-2' style={{ backgroundColor: ' rgba(144, 176, 114)' }}>View More</Button>
                                </Link>

                           

                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-3 d-flex justify-content-center mt-5 mb-5'>
                    <Card className="shadow " style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={home_image2} style={{ height: '160px' }} />
                        <Card.Body className=' justify-content-center'>

                            <Card.Title>Certificate Course on Advanced Pranayama Techniques ( Pranayama Online Course)</Card.Title>
                            <Card.Text>
                                Knowledge of nadi system and energy channels...
                            </Card.Text>
                           

                                <Link>
                                    <Button className='border border-outline border-2 shadow' style={{ backgroundColor: ' rgba(144, 176, 114)' }}>View More</Button>
                                </Link>

                        

                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-3 d-flex justify-content-center mt-5 mb-5 '>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={home_image3} style={{ height: '160px' }} />
                        <Card.Body className=' justify-content-center'>

                            <Card.Title className='mb-4'>Certificate Yoga Therapy Course - Online</Card.Title>
                            <Card.Text >
                                Become a certified Yoga therapist through The Yoga Institute....
                            </Card.Text>

                            <Link>
                                <Button className='border border-outline border-2 shadow mt-4' style={{ backgroundColor: ' rgba(144, 176, 114)' }}>View More</Button>
                            </Link>

                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    )
}

export default Courses