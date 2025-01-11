import React from 'react'
import logo from '../../assets/logo-sm.png';

function Footer() {
    return (
        <div className='bg-black h-100 mt-5 d-flex'>
            <div className="container d-flex">
                <h1>footer</h1>
                <img src={logo} alt="logo" style={{ maxWidth: 30,  maxHeight:30}} />
            </div>
        </div>
    )
}

export default Footer
