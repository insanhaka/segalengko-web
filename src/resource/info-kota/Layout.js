import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { useParams } from "react-router-dom";

import Navbar from '../components/NavbarContent';
import Footer from '../components/Footer';

import VideoIndex from './video/Index';


function Layout() {

    let params = useParams();

  return (
    <ChakraProvider>
    <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">

            <div className="layout-page">

                    <Navbar/>

                <div className="content-wrapper pt-5">

                    <div className='container mt-5'>

                      {params.menu == "video" &&
                          <VideoIndex/>
                      }

                    </div>

                    <Footer/>
                    <br/>

                </div>
                
            </div>
            
        </div>
    </div>
    </ChakraProvider>
  );
}

export default Layout;