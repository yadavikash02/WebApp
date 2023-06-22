import React from 'react'
// import logo1 from './Image/Ellipse 1-1.png'
// import logo2 from './Image/Ellipse 1.png'
import logo from './Image/Ecosystem.jpg'
import logo3 from './Image/Ellipse 2.png'
function MainContent() {
    return (
        <div className='main'>
            <div className="logo3 mx-5">
                <img src={logo3} className='img-fluid' alt="" />
            </div>
            <div className="container heading">
                <h1>Welcome to</h1>
                <h1 className='text-primary mx-1'>Incubyte</h1>
            </div>
            <div className="heading">
                <p>Building bridges to success in the tech Ecosystem </p>
            </div>
            <div className="logo">
                <img src={logo} className='image img-fluid' alt="" />
            </div>
        </div>
    )
}

export default MainContent
