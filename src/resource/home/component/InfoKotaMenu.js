import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import '../../../assets/css/home.css';
import Lp from '../../../assets/img/location.png';
import Bp from '../../../assets/img/news.png';
import Vp from '../../../assets/img/video.png';
import Tp from '../../../assets/img/telephone.png';
import Ppid from '../../../assets/img/folder.png';

function InfoKotaMenu() {

  return (
    <div className="container">
        <Card>
            <Card.Header>
                <h3><i className='bx bx-building-house' style={{ fontSize: 35 }}></i> Info Kota</h3>
                <hr/>
            </Card.Header>
            <Card.Body>

                <div className='row p-3'>
                    <div className='col-sm-2'>
                        <Card style={{ height: 150, marginBottom: 30 }}>
                            <Card.Body>
                                <center>
                                <Image src={Lp} className="img-fluid" style={{ width: 50, marginBottom: 20 }} alt="Portal Data"/>
                                <h6>Lokasi</h6>
                                </center>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-sm-2'>
                        <Card style={{ height: 150, marginBottom: 30 }}>
                            <Card.Body>
                                <center>
                                <Image src={Bp} className="img-fluid" style={{ width: 50, marginBottom: 20 }} alt="Portal Data"/>
                                <h6>Berita</h6>
                                </center>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-sm-2'>
                        <Card style={{ height: 150, marginBottom: 30 }}>
                            <a href="/info-kota/video">
                                <Card.Body>
                                    <center>
                                    <Image src={Vp} className="img-fluid" style={{ width: 50, marginBottom: 20 }} alt="Portal Data"/>
                                    <h6>Video</h6>
                                    </center>
                                </Card.Body>
                            </a>
                        </Card>
                    </div>
                    <div className='col-sm-2'>
                        <Card style={{ height: 150, marginBottom: 30 }}>
                            <Card.Body>
                                <center>
                                <Image src={Tp} className="img-fluid" style={{ width: 50, marginBottom: 20 }} alt="Portal Data"/>
                                <h6>Telepon<br/>Penting</h6>
                                </center>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-sm-2'>
                        <Card style={{ height: 150, marginBottom: 30 }}>
                            <a href="https://ppid.tegalkab.go.id" target="_blank">
                                <Card.Body>
                                    <center>
                                    <Image src={Ppid} className="img-fluid" style={{ width: 50, marginBottom: 20 }} alt="Portal Data"/>
                                    <h6>PPID</h6>
                                    </center>
                                </Card.Body>
                            </a>
                        </Card>
                    </div>
                </div>

            </Card.Body>
        </Card>
    </div>
  );
}

export default InfoKotaMenu;