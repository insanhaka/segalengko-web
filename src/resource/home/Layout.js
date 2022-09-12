import React from 'react';
import '../../assets/css/aside.css';
import '../../assets/css/home.css';

import Navbar from '../components/Navbar';
import Slide from './component/Slide';
import Footer from '../components/Footer';
import PortalDataMenu from './component/PortalDataMenu';
import InfoKotaMenu from './component/InfoKotaMenu';

function Layout() {

  return (
    <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
            {/* <Sidebar/> */}
            <div className="layout-page">

                <Navbar/>

                <div className="content-wrapper" style={{ paddingTop: 80 }}>

                    <Slide/>

                    <div className="container-xxl flex-grow-1 container-p-y">

                        <PortalDataMenu/>

                        <br/>

                        <InfoKotaMenu/>

                    </div>

                    <Footer/>       

                </div>
                
            </div>
            
        </div>
    </div>
  );
}

export default Layout;