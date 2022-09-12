import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import LoginHeader from '../../assets/img/login-header.png';

function Login() {

  return (
    <div className="container pt-4">

        <div className='row mb-2'>
            <div className='col-2'>
                <Button href="/" variant="light"><i className='bx bx-left-arrow-circle'></i> Kembali</Button>
            </div>
        </div>

        <div className="card">
            <div className="card-body p-5">

                <div className='row justify-content-around'>
                    <div className='col-md-5'>
                        <Image src={LoginHeader} className="img-fluid" alt="Login Header"/>
                    </div>
                    <div className='col-md-4 mt-3'>
                        <h3 className="mb-2">Selamat Datang</h3>
                        <p className="mb-4" style={{ fontSize: 12, color: '#a4b0be' }}>Silahkan lengkapi email username / email serta password untuk masuk</p>

                        <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                            <div className="mb-3">
                                <label className="form-label">Email Atau Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email or username"
                                    autoFocus
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary d-grid w-100 mt-4" type="submit">Log in</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
          
    </div>
  );
}

export default Login;