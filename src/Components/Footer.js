import React from 'react'
import { NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <div>
 <Card className="text-center">
      <Card.Body className='bg-dark text-light py-4'>
        <Card.Title>Feel Free to Contact us</Card.Title>
        <Card.Text>
         Email : furniture@gmail.com | Phone Number : +91 9087654312 | Address : 1, First lane, Anna Nagar, Chennai 600001
        </Card.Text>
        <Nav.Link href="/"> <Button className='btn btn-success'>Home</Button></Nav.Link>
      
      </Card.Body>
      
    </Card>
    </div>
  )
}

export default Footer