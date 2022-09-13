import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import '../../../assets/css/home.css';
import PortalDataImage from '../../../assets/img/Portaldata-image.png';
import Empty from '../../../assets/img/empty-menu.png';

import { useSelector } from 'react-redux';
import axios from 'axios';

function PortalDataMenu() {

    const apiUrl = useSelector(state => state.ApiReducer);
    // const apiToken = useSelector(state => state.HeaderReducer);

    const [menu, setMenu] = useState('');

    useEffect(() => {
        axios.get(
            apiUrl.url+'menu-front',
            // { headers: apiToken.key}
        ).then(function (response) {
            const res = response.data.data;
            setMenu(res);

        })
        .catch(function (error) {
            console.log("error nih");
            // Swal.fire({
            //     icon: 'error',
            //     text: 'Mohon maaf, sedang ada gangguan pada server',
            //     showConfirmButton: false,
            //     timer: 2500
            // })
        });

    }, []);

    if (menu.length === 0) {

        return (
            <div className="container pt-5">
                <div className='row p-3 justify-content-center'>
                    <div className='col-sm-4'>
                        <Image src={Empty} className="img-fluid mb-2" alt="Portal Data"/>
                    </div>
                    <div className='col-sm-7'>
                        <h3><i className='bx bx-bar-chart-square' style={{ fontSize: 35 }}></i> Portal Data</h3>
                        <hr/>
                        <div className='row pt-5 justify-content-center'>
                            <div className='col-md-7'>
                                <h4>Oooppss..</h4>
                                <p>Data menu tidak ditemukan</p>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        );

    }else {

        const menulist = menu.map((a) => {
            if (a.is_active === 1) {
                return  <div className='col-md-4'key={a.id}>
                            <Card className='kartu p-2'>
                                <Link to={"/portal-data/"+a.uri}>
                                    <Card.Body className='body-kartu'>
                                        <center>
                                        <Image src={a.icon} className="icon-smart-city img-fluid mb-2 mt-3" style={{ width: 50 }} alt="Portal Data"/>
                                        <p className='portal-data-title'>{a.name}</p>
                                        </center>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>
            }else {
                return  <div className='col-md-4'key={a.id}>
                        </div>
            }

            
        });

        return (
            <div className="container pt-5">
                <div className='row p-3'>
                    <div className='col-sm-5'>
                        <Image src={PortalDataImage} className="img-fluid mb-2" alt="Portal Data"/>
                    </div>
                    <div className='col-sm-7'>
                        <h3><i className='bx bx-bar-chart-square' style={{ fontSize: 35 }}></i> Portal Data</h3>
                        <hr/>
                        <div className='row p-3'>
                            {menulist}
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default PortalDataMenu;