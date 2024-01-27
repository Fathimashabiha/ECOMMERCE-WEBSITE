import React from 'react'
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <>
      <h2 className="text-center text-success">Contact Us </h2>
      <div className="container">
      <Form>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Query</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <button type='submit' className='btn btn-success mb-3'>Submit</button>
    </Form>
      </div>
    </>
  )
}

export default Contact