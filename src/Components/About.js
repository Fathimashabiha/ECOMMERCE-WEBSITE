import React from 'react'

const About = () => {
  return (
    <>
    <div className="container">
    <h3 className='text-center text-success'>ABOUT OUR FURNITURES</h3>
      <div className="row my-5 d-flex align-item-center">
       <div className="col-xs-12 col-md-6">
        <img src={require ('../images/cs.jpg')}/>
        </div>
        <div className="col-xs-12 col-lg-6 my-2">
          <p>Lorem ipsum explicabo velit laborum officiis. Facilis animi cupiditate esse. Tempore nam nulla quidem voluptatum? Sit facere reprehenderit ut, expedita cupiditate omnis aliquid.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maxime perferendis soluta reprehenderit, quos modi?</p>
          </div>
      </div>
    </div>
    </>
  )
}

export default About