import React from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

function SelectedClasses() {
    return (
        <>

            <div >
                <Sidebar />

                <div className="d-flex justify-content-center">
                    <h2 className="mt-5" style={{ color: 'rgb(50, 104, 89)' }}>Selected Classes</h2>
                </div>

                <div className='d-flex justify-content-center mt-5'>

                    <div className='row w-100 justify-content-center'>
                        <div className='col-md-1'></div>
                        < div className='col-md-6 mb-5 '>
                            <table className='table shadow border'>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Course</th>
                                        <th>Date</th>
                                        <th>Fee</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody >

                                    <tr >
                                        <td>1</td>
                                        <td>pranayama....</td>
                                        <td>12/06/2024</td>
                                        <td>₹2500</td>
                                        <td><button className='btn border-none'><i class="fa-solid fa-trash"style={{color:'red'}} ></i></button></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className='col-md-4 ms-3 ' style={{width:'280px'}}>
                            <div className='border shadow p-4'>
                                <h5 className='mb-4'>Summary</h5>
                                <h6>Total Number of Courses: <span className='text-warning fw-bolder'></span></h6>
                                <h6>Total Fees: <span className='text-warning fw-bolder'>₹</span></h6>
                                <Link to={'/Payment'}><button className='btn shadow rounded w-100 mt-3' style={{backgroundColor:' rgba(144, 176, 114) ',color:'white'}}>Checkout</button></Link>
                                
                            </div>

                        </div>
                    </div>

                </div>

            </div >

        </>
    )
}

export default SelectedClasses