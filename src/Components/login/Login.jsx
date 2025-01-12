import React from 'react';
import "./loginStyle.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

function Login() {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className='col-3 col-sm-4 col-md-6 loginLogo'>
                    <img src="/logo-sm.png" className='w-100' alt="" />
                </div>
                <div className='col-md-6 align-content-center'>
                    <form className="needs-validation rounded p-3" noValidate>
                        <div className="col mb-2">
                            <label htmlFor="validationCustom01" className="form-label text-white">Username</label>
                            <input type="text" className="form-control" id="validationCustom01" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col mb-4">
                            <label htmlFor="validationCustom02" className="form-label text-white">Password</label>
                            <input type="text" className="form-control" id="validationCustom02" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login
