import React from 'react'
import logo from '../../assets/logo-sm.png';

function Footer() {
    return (
        <div className='bg-black h-100 mt-5 d-flex'>
            <div className="container d-flex py-2">
                <div className="row">
                    <h1>footer<img src={logo} alt="logo" style={{ maxWidth: 40 }} /></h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
