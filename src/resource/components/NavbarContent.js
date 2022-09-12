import React from 'react';
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/img/logo.png';
import { Heading } from '@chakra-ui/react';
import Button from 'react-bootstrap/Button';


function NavbarContent() {

  return (
    <nav
        className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme position-fixed"
        id="layout-navbar"
        style={{ alignSelf: 'center' }}
    >
        
        <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

            <ul className="navbar-nav flex-row align-items-center">
                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <Button variant="light" size='sm' href='/'>
                        <span className="align-middle" style={{ fontSize: 13 }}><i className='bx bxs-chevron-left'></i> Kembali</span>
                    </Button>
                </li>
            </ul>

            <div className="navbar-nav align-items-center ms-auto">
                <a href="/">
                    <div className="nav-item d-flex align-items-center">
                        <Image src={Logo} className="img-fluid" style={{ width: 35 }} alt="Logo"/>
                        <Heading as='h4' size='md' style={{ marginLeft: 5, textTransform: 'capitalize' }}>
                            SegaLengko
                        </Heading>
                    </div>
                </a>
            </div>
        </div>

    </nav>
  );
}

export default NavbarContent;