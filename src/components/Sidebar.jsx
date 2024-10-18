
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Sidebar Toggle Button for Mobile View */}
            <button 
                className="btn btn-black d-md-none position-fixed top-0 start-0 m-3" 
                onClick={toggleSidebar} 
                style={{ zIndex: 2000 }}
            >
                <i className="fa-solid fa-bars"></i>
            </button>

            {/* Sidebar */}
            <div 
                className={` mainsidebar d-flex flex-column shadow position-fixed  ${isOpen ? 'd-block' : 'd-none'} d-md-flex`} 
                style={{ width: '190px',height:'100vh',backgroundColor:'rgba(182, 133, 83, 0.979)' , transition: '0.3s' }}
            >
                <h4 className='ms-4 mt-5 text-white'>
                    NuYoga
                    <img 
                        src="https://cdn-icons-png.flaticon.com/256/919/919312.png" 
                        alt="logo" 
                        width={'35px'} 
                        className="ms-2"
                    />
                </h4>
                <div className='line'></div>

                <div className='d-flex flex-column mt-5'>
                    <h6 className='ms-4 text-black'>MENU</h6>
                    <div className='sidebar mt-3 ms-2' >
                    <Link to={'/UserDashboard'} className='ms-4  text-white text-decoration-none'>
                        <i className="fa-solid fa-house  me-2" style={{color:'rgba(138, 81, 23, 0.979)'}}></i> Dashboard
                    </Link>
                    </div>
                    <div className='sidebar ms-2  mt-3'>
                    <Link to={'/EnrolledClass'} className='ms-4 text-white  text-decoration-none' >
                    <i class="fa-regular fa-address-card me-2" style={{color:'rgba(138, 81, 23, 0.979)'}}></i>
                        My Enroll
                    </Link>
                    </div>
                    <div className='sidebar ms-2  mt-3'>
                    <Link to={'/SelectedClasses'} className='ms-4  text-white text-decoration-none'>
                        <i className="fa-regular fa-square-check  me-2" style={{color:'rgba(138, 81, 23, 0.979)'}}></i> My Selected
                    </Link>
                    </div>
                    <div className='sidebar ms-2  mt-3'>
                    <Link to={'#'} className='ms-4 text-decoration-none text-white' >
                        Payment History
                    </Link>
                    </div>
                </div>

                <div className='d-flex flex-column  mt-5'>
                    <h6 className='ms-4 text-black'>USEFUL LINKS</h6>
                    <div className='sidebar ms-2  mt-3'>
                    <Link to={'/'} className='ms-4 text-white text-decoration-none'>
                        <i className="fa-solid fa-house  me-2" style={{color:' rgba(138, 81, 23, 0.979)'}}></i> Main Home
                    </Link>
                    </div>
                    <div className='sidebar ms-2  mt-3'>
                    <Link to={'/login'} className='ms-4  text-white text-decoration-none'>
                        <i className="fa-solid fa-arrow-right-from-bracket me-2" style={{color:'rgba(138, 81, 23, 0.979)'}}></i> LogOut
                    </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Sidebar;




