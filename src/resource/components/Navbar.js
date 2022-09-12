import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/img/logo.png';


function Navbar() {

  return (
    <nav
        className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme position-fixed"
        id="layout-navbar"
        style={{ alignSelf: 'center' }}
    >
        
        <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            <div className="navbar-nav align-items-center">
                <a href='/'>
                <div className="nav-item d-flex align-items-center">
                    <Image src={Logo} className="img-fluid" style={{ width: 35 }} alt="Logo"/>
                    <h5 className='mt-3 d-none d-sm-block' style={{ marginLeft: 5 }}> SegaLengko</h5>
                </div>
                </a>
            </div>

            <ul className="navbar-nav flex-row align-items-center ms-auto">

                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <Button variant="primary" size="sm" href="/login">
                        <div className='row'>
                            <div className='col-4'>
                                <i className='bx bxs-key'></i>
                            </div>
                            <div className='col-5 pb-1'>
                                <span className="align-middle" style={{ fontSize: 13 }}>Login</span>
                            </div>
                        </div>
                    </Button>
                </li>

            </ul>
        </div>

    </nav>

  );
}

export default Navbar;