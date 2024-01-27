import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Product = () => {
  return (
    <div>
      <h2 className='text-center text-success'>Our Products</h2>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 my-4">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require ('../images/chair.jpg')} />
      <Card.Body>
        <Card.Title className='text-center text-success'>Cushion Chair</Card.Title>
       
        <Button variant="success mx-5" >See More Chairs</Button>
      </Card.Body>
    </Card>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 my-4">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require ('../images/sofa.jpg')} />
      <Card.Body>
        <Card.Title className='text-center text-success'>Sofa</Card.Title>
        
        <Button variant="success mx-5">See More Sofa</Button>
      </Card.Body>
    </Card>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 my-4">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require ('../images/dc.jpg')} />
      <Card.Body>
        <Card.Title className='text-center text-success'>Dressing Table</Card.Title>
       
        <Button variant="success mx-3">See More Dressing Table</Button>
      </Card.Body>
    </Card>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 my-4">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require ('../images/bed.jpg')} />
      <Card.Body>
        <Card.Title className='text-center text-success'>King Size Bed</Card.Title>
       
        <Button variant="success mx-5">See More Bed</Button>
      </Card.Body>
    </Card>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4  my-4">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require ('../images/dt.jpg')} />
      <Card.Body>
        <Card.Title className='text-center text-success'>Dinning Table</Card.Title>
        
        <Button variant="success mx-3">See More Dinning Table</Button>
      </Card.Body>
    </Card>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 my-4">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require ('../images/sss.jpg')} />
      <Card.Body>
        <Card.Title className='text-center text-success'>Swing</Card.Title>
       
        <Button variant="success mx-5">See More Swing</Button>
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product