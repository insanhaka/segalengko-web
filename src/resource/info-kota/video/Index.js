import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Heading, Highlight } from '@chakra-ui/react'
import { useParams } from "react-router-dom";

// Image Assets
import Header from '../../../assets/img/video-head.png';
import Pemkab from '../../../assets/img/pemkab.png';
import Humas from '../../../assets/img/humas.jpg';
import SlawiFM from '../../../assets/img/slawi-fm.png';

function Index() {

    let params = useParams();

  return (
    <div className='video-content pt-4'>
      <div className='container'>
        <div className='row justify-content-evenly'>
          <div className='col-md-4'>
            <Image src={Header} className="img-fluid" alt="Logo"/>
          </div>
          <div className='col-md-6'>
            <Heading>
              Layanan Live Streaming Dan Konten Video
            </Heading>
            <div className='row mt-4'>
              <div className='col-md-4'>
                <Card style={{ height: 150, marginBottom: 30, paddingBottom: 4 }}>
                  <a href='https://www.youtube.com/user/PemkabTegal' target="_blank">
                    <Card.Body>
                      <center>
                      <Image src={Pemkab} className="img-fluid mb-2" style={{ width: 60 }} alt="Logo"/>
                      <p style={{ fontSize: 14, fontWeight: 'bold', color: '#566a7f' }}>Pemkab <br/> Tegal</p>
                      </center>
                    </Card.Body>
                  </a>
                </Card>
              </div>
              <div className='col-md-4'>
                <Card style={{ height: 150, marginBottom: 30, paddingBottom: 4 }}>
                  <a href='https://www.youtube.com/c/HumasTegalkab' target="_blank">
                    <Card.Body>
                      <center>
                      <Image src={Humas} className="img-fluid mb-2" style={{ width: 60 }} alt="Logo"/>
                      <p style={{ fontSize: 14, fontWeight: 'bold', color: '#566a7f' }}>Humas <br/> Pemkab Tegal</p>
                      </center>
                    </Card.Body>
                  </a>
                </Card>
              </div>
              <div className='col-md-4'>
                <Card style={{ height: 150, marginBottom: 30, paddingBottom: 4 }}>
                  <a href='https://www.youtube.com/channel/UCDlAZ8GjYN4egBWyXwzD7mw' target="_blank">
                    <Card.Body>
                      <center>
                      <Image src={SlawiFM} className="img-fluid mb-2" style={{ width: 60 }} alt="Logo"/>
                      <p style={{ fontSize: 14, fontWeight: 'bold', color: '#566a7f' }}>Radio <br/> Slawi FM</p>
                      </center>
                    </Card.Body>
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;