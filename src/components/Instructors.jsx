import React from 'react'
import Card from 'react-bootstrap/Card';
function Instructors() {
  return (
    <div className='container'>

      <div className='row'>
        <div className='col-md-3 d-flex flex-column justify-content-center align-items-center mt-5 mb-5' >

          <Card.Img variant="top" className='shadow'  src="https://images.squarespace-cdn.com/content/v1/5a2cb8942aeba5fc61d23b3c/2643c78a-d41b-416c-9c20-62947801ee64/Teresa+Byer+Yoga+Grace+Qualicum?format=500w" style={{ width: '180px', height: '180px', borderRadius: '50%' }} />

          <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
            <Card.Title>Lisa</Card.Title>
            <Card.Text>
              certified Yoga therapist
            </Card.Text>
          </div>

        </div>
        <div className='col-md-3  d-flex flex-column justify-content-center align-items-center mt-5 mb-5 ' >

          <Card.Img variant="top" className='shadow' src="https://images.squarespace-cdn.com/content/v1/5a2cb8942aeba5fc61d23b3c/21edb687-ff59-495b-8726-e36a55e0b184/Lisa+Yoga+Grace+Qualicum?format=500w" style={{ width: '180px', height: '180px', borderRadius: '50%' }} />

          <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
            <Card.Title>Jane</Card.Title>
            <Card.Text>
              certified Yoga therapist
            </Card.Text>
          </div>

        </div>

        <div className='col-md-3 d-flex flex-column justify-content-center align-items-center mt-5 mb-5 ' >

          <Card.Img variant="top" className='shadow'  src="https://images.squarespace-cdn.com/content/v1/5a2cb8942aeba5fc61d23b3c/7849dcb4-c9ef-446d-b944-003afc8b7cc4/IMG_6066.jpg?format=500w" style={{ width: '180px', height: '180px', borderRadius: '50%' }} />

          <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
            <Card.Title>Kaylee</Card.Title>
            <Card.Text>
              certified Yoga therapist
            </Card.Text>
          </div>

        </div>

        <div className='col-md-3 d-flex flex-column justify-content-center align-items-center mt-5 mb-5 ' >

          <Card.Img variant="top" className='shadow'  src="https://images.squarespace-cdn.com/content/v1/5a2cb8942aeba5fc61d23b3c/c3c05f04-3a4a-4912-a6cd-b4dfa0918572/IMG_6009.jpg?format=500w" style={{ width: '180px', height: '180px', borderRadius: '50%' }} />

          <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
            <Card.Title>Teresa</Card.Title>
            <Card.Text>
              certified Yoga therapist
            </Card.Text>
          </div>

        </div>


      </div>

    </div>
  )
}

export default Instructors