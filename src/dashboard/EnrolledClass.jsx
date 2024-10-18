import React from 'react'
import Sidebar from '../components/Sidebar'

function EnrolledClass() {
  return (
    <div>
      <Sidebar />

      <div className="d-flex justify-content-center">
        <h2 className="mt-5" style={{ color: 'rgb(50, 104, 89)' }}>Enrolled Classes</h2>
      </div>
    </div>
  )
}

export default EnrolledClass