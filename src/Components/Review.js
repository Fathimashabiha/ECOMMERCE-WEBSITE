import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Review = () => {
  return (
    <div>
      <div className="container">
        <h2 className='text-center text-success'>Review</h2>
        <p>Thank you for taking your time and reviewing us, Each review helps us to improve ourselves and correct our flaws, it also helps us to motivate and to do our best. The genunine reviews will help our future clients to choose us. </p>
        <div className="row">
         <div className="col-xs-12 col-sm-12 col-md-6  col-lg-3  mx-3 my-4">
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>William Smith</Card.Title>
        <Card.Subtitle className="mb-2 text-success">General Manager</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
         </div>

         <div className="col-xs-12 col-sm-12 col-md-6  col-lg-3  mx-3 my-4">
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Jeon Jungkook</Card.Title>
        <Card.Subtitle className="mb-2 text-success">Singer</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
         </div>

         <div className="col-xs-12 col-sm-12 col-md-6  col-lg-3 my-4 mx-3">
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Virat Kholi</Card.Title>
        <Card.Subtitle className="mb-2 text-success">Cricket Player</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
         </div>

         <div className="col-xs-12 col-sm-12 col-md-6  col-lg-3 my-4 mx-3">
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Rohini</Card.Title>
        <Card.Subtitle className="mb-2 text-success">Teacher</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
         </div>

        </div>
      </div>
    </div>

    
  )
}

export default Review