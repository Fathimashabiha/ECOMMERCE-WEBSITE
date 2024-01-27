import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import './Home.css';

const Home = () => {
  return (
    <Container fluid>
       < Row className='justify-content-center align-item-center'>
         <Col >
         <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require ('../images/c5.jpg')}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require ('../images/c.webp')}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require ('../images/c3.jpg')}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
         </Col>
       </Row>

       <h1 className="text-center text-success my-3">
        Our BestSeller Products
       </h1>
       <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 my-4">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src={require ('../images/p2.jpg')} />
      <Card.Body>
        <Card.Title className='text-success text-center'>CUSHION CHAIR</Card.Title>
        </Card.Body>
    </Card>
   </div>
          <div className="col-xs-12 col-sm-6 col-md-4 my-4">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require ('../images/p5.jpg')} />
      <Card.Body>
        <Card.Title className='text-success text-center'>PORCH SWING</Card.Title>
      </Card.Body>
    </Card>
   </div>
   <div className="col-xs-12 col-sm-6 col-md-4 my-4">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require ('../images/p7.jpg')} />
      <Card.Body>
        <Card.Title className='text-success text-center'>KING-SIZE BED</Card.Title>
      </Card.Body>
    </Card>
    </div> 
</div>
 </div>

      <h2 className="text-center text-success">Questions Asked !!</h2>
      <div className="container">
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header  className='text-success'>Question : 1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='mb-3'>
        <Accordion.Header className='text-success'>Question : 2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
 

    </Container>
  )
}

export default Home