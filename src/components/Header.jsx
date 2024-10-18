// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
// import './Header.css'; // Import your CSS file


// function Header() {
//   return (
//     <div>
//         <Navbar className="static-header"  expand="lg"  data-bs-theme="dark">
//         <Container >
//           <Navbar.Brand><Link to='' target="" className='me-3 fs-4' style={{ textDecoration: 'none',color:'black' }}>Nuyoga<img src="https://cdn-icons-png.flaticon.com/256/919/919312.png" alt="" width={'45px'} /></Link></Navbar.Brand>
          
//           <Nav className="justify-content-center align-items-center">
//           <Link to='/' target="" className='me-4 ' style={{ textDecoration: 'none',color:'orange' }}>Home</Link>
//             <Link to='/About' target="" className='me-4 ' style={{ textDecoration: 'none',color:'black' }}>About</Link>
//             <Link  to='/Instructors' target="" className='me-4' style={{ textDecoration: 'none',color:'black' }}>Instructors</Link>
//             <Link  to='/Courses' target="" className='me-4' style={{ textDecoration: 'none',color:'black' }}>Courses</Link>
//             <Link>
//             <Button variant="outline-dark" className='me-4'>LogOut</Button>
//             </Link>
        
//           </Nav>
//         </Container>
//       </Navbar>
//     </div>
//   )
// }

// export default Header

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  
  return (
    <Navbar className="static-header shadow" expand="lg" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand>
          <Link to='/' className='me-3 fs-3' style={{ textDecoration: 'none', color: 'white' }}>
            Nuyoga
            <img src="https://cdn-icons-png.flaticon.com/256/919/919312.png" alt="" width={'45px'} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center fs-5">
            <Link to={'/'} className='me-4' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
            {/* <Link to={'/About'} className='me-4' style={{ textDecoration: 'none', color: 'black' }}>About</Link> */}
            <Link to={'/Instructors'} className='me-4' style={{ textDecoration: 'none', color: 'black' }}>Instructors</Link>
            <Link to={'/Courses'} className='me-4' style={{ textDecoration: 'none', color: 'black' }}>Courses</Link>
            <Link to={'/ContactUs'} className='me-4' style={{ textDecoration: 'none', color: 'black' }}>ContactUs</Link>
            <Link to={'/login'}>
              <Button variant="outline-light" className=' logoutbtn me-4 shadow'>LogIn</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;