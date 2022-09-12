import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Heading } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from 'recharts';
import Select from 'react-select';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios from 'axios';

import Data from '../../../assets/Faker/Data';
import Gender from '../../../assets/img/gender.png';
import Masjid from '../../../assets/img/mosque.png';
import Pendidikan from '../../../assets/img/graduation-hat.png';
import Umur from '../../../assets/img/age-group.png';
import Jabatan from '../../../assets/img/jabatan.png';
import Golongan from '../../../assets/img/golongan.png';
import Eselon from '../../../assets/img/eselon.png';

const genderOptions = [
    { value: 'Semua OPD', label: 'Semua OPD' },
    { value: 'Dinas Kominfo', label: 'Dinas Kominfo' },
    { value: 'Dinas Kesehatan', label: 'Dinas Kesehatan' },
  ];

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Year',
        selector: row => row.year,
        sortable: true,
    },
];

const customStyles = {
    headCells: {
        style: {
            fontSize: 14,
            backgroundColor: '#bee3f8',
        },
    },
};

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 3,
        title: 'Ghostbusters',
        year: '1984',
    },
]

function Index() {

    let params = useParams();
    const [oldgender, setOldgender] = useState('');

    const apiUrl = useSelector(state => state.ApiReducer);
    const apiToken = useSelector(state => state.HeaderReducer);

    const [menu, setMenu] = useState('');
    const [menuicon, setMenuicon] = useState('');
    const [menuchild, setMenuchild] = useState('');

    useEffect(() => {
        axios.get(
            apiUrl.url+'menu-front',
            // { headers: apiToken.key}
        ).then(function (response) {
            // All Data
            const res = response.data.data;
            // Get Menu Parent
            const getParent = res.filter((menus)=> {
                return menus.uri === params.menu;
            });
            setMenu(getParent);
            // Set Icon Primary Menu
            setMenuicon(getParent[0].icon)
            // Get Child Menu
            const getChild = getParent.map((childs)=> {
                if (childs.child.length == 0) {
                    return "KOSONG";
                }else {
                    const dataanak = childs.child;
                    const anak = [];
                    for (let i = 0; i < dataanak.length; i++) {
                        anak.push(dataanak[i]);
                    }
                    setMenuchild(anak);
                }
            });
        })
        .catch(function (error) {
            console.log("error nih");
        });

    }, []);

  return (

    <Tabs variant='soft-rounded' colorScheme='blue' className='mt-1'>
        <div className='row'>
            <div className='col-md-2 mt-2'>
                <div className='position-fixed' style={{ zIndex: 1 }}>
                    <center>
                    <Image src={menuicon} className="d-inline-block align-top" style={{ width: 40, }} alt="Logo"/>
                    <Heading size='sm' style={{ textTransform: 'capitalize' }}>{params.menu.replace("-", " ")}</Heading>
                    </center>
                    <br/>
                    <hr/>
                    <br/>
                    {Array.isArray(menuchild)
                    ? menuchild.map(sub => {
                        if (sub !== "KOSONG") {
                            return (
                                <TabList className='mb-2'key={sub.id}>
                                    <Tab style={{ fontSize : 12, wordWrap: 'break-word', paddingRight: 5, paddingLeft: 18, width: 150, textAlign: 'left', justifyContent: 'flex-start' }}>
                                        <Image src={sub.icon} className="d-inline-block align-top" style={{ width: 23, marginRight: 10}} alt="Logo"/> 
                                        {sub.name}
                                    </Tab>
                                </TabList>
                            )
                        }
                    })
                    : null}
                    
                </div>
            </div>
            <div className='col-md-10'>
                <TabPanels>
                    <TabPanel>
                        <Card style={{ minHeight: 400 }}>
                            <Card.Header>
                                <div className='row justify-content-end'>
                                    <div className='col-sm-12 d-flex justify-content-end'>
                                        <div>
                                            <label className="form-label">
                                                Pencarian data Kepegawaian berdasarkan OPD
                                            </label>
                                            <Select 
                                            options={genderOptions}
                                            isSearchable='true'
                                            defaultValue={genderOptions[0]}
                                            onChange={(event)=> setOldgender([event])}
                                            theme={(theme) => ({
                                                ...theme,
                                                borderRadius: 3,
                                                colors: {
                                                    ...theme.colors,
                                                    primary: '#778beb',
                                                },
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Card.Header>
                            <Card.Body className='p-3 pb-5'>

                                <div className='row mb-4'>
                                    <div className='col-md-12'>
                                        <Heading size='md' className='text-center mt-3'>
                                            Grafik Jumlah Pegawai Per Tahun
                                        </Heading>
                                    </div>
                                </div>

                                <div style={{ width: '100%', height: 300 }}>
                                    <ResponsiveContainer>
                                        <AreaChart
                                            data={Data}
                                            margin={{
                                            top: 10,
                                            right: 30,
                                            left: 0,
                                            bottom: 0,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                            <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                            <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>

                                <div className='row mt-5 p-4'>
                                    <div className='col-md-12 pb-2'>
                                        <Heading size='md'>
                                            Tabel Jumlah Pegawai Per Tahun
                                        </Heading>
                                    </div>
                                    <div className='col-md-12'>
                                        <Card>
                                            <Card.Body>
                                                <DataTable
                                                    columns={columns}
                                                    data={data}
                                                    customStyles={customStyles}
                                                />
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>

                                <div className='row mt-2 p-4'>
                                    <div className='col-md-12 mb-4'>
                                        <Heading size='md'>
                                            Pengelompokan Berdasarkan Kategori
                                        </Heading>
                                    </div>
                                    <div className='col-sm-3'>
                                        <Card style={{ height: 140, marginBottom: 30 }}>
                                            <Card.Body>
                                                <center>
                                                <Image src={Gender} className="img-fluid" style={{ width: 60, marginBottom: 15 }} alt="Portal Data"/>
                                                <h6>Jenis Kelamin</h6>
                                                </center>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className='col-sm-3'>
                                        <Card style={{ height: 140, marginBottom: 30 }}>
                                            <Card.Body>
                                                <center>
                                                <Image src={Masjid} className="img-fluid" style={{ width: 60, marginBottom: 15 }} alt="Portal Data"/>
                                                <h6>Agama</h6>
                                                </center>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className='col-sm-3'>
                                        <Card style={{ height: 140, marginBottom: 30 }}>
                                            <Card.Body>
                                                <center>
                                                <Image src={Pendidikan} className="img-fluid" style={{ width: 60, marginBottom: 15 }} alt="Portal Data"/>
                                                <h6>Pendidikan</h6>
                                                </center>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className='col-sm-3'>
                                        <Card style={{ height: 140, marginBottom: 30 }}>
                                            <Card.Body>
                                                <center>
                                                <Image src={Umur} className="img-fluid" style={{ width: 60, marginBottom: 15 }} alt="Portal Data"/>
                                                <h6>Rentang Usia</h6>
                                                </center>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className='col-sm-3'>
                                        <Card style={{ height: 140, marginBottom: 30 }}>
                                            <Card.Body>
                                                <center>
                                                <Image src={Jabatan} className="img-fluid" style={{ width: 60, marginBottom: 15 }} alt="Portal Data"/>
                                                <h6>Jabatan</h6>
                                                </center>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className='col-sm-3'>
                                        <Card style={{ height: 140, marginBottom: 30 }}>
                                            <Card.Body>
                                                <center>
                                                <Image src={Golongan} className="img-fluid" style={{ width: 60, marginBottom: 15 }} alt="Portal Data"/>
                                                <h6>Golongan Ruang</h6>
                                                </center>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className='col-sm-3'>
                                        <Card style={{ height: 140, marginBottom: 30 }}>
                                            <Card.Body>
                                                <center>
                                                <Image src={Eselon} className="img-fluid" style={{ width: 60, marginBottom: 15 }} alt="Portal Data"/>
                                                <h6>Eselon</h6>
                                                </center>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card style={{ minHeight: 400 }}>
                            <Card.Header>

                            </Card.Header>
                            <Card.Body className='p-3 pb-5'>

                                

                            </Card.Body>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </div>
        </div>
    </Tabs>
    
  );
}

export default Index;