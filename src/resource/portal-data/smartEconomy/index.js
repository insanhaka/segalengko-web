import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Heading } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Select from 'react-select';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios from 'axios';
import { scaleOrdinal } from 'd3-scale';
import { schemeTableau10 } from 'd3-scale-chromatic';

const genderOptions = [
    { value: 'Semua Jenis Usaha', label: 'Semua Jenis Usaha' },
    { value: 'Kerajinan', label: 'Kerajinan' },
    { value: 'Logam', label: 'Logam' },
    { value: 'Peralatan Olahraga', label: 'Peralatan Olahraga' },
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


const colors = scaleOrdinal(schemeTableau10).range();
const data = [
    {
      name: 'Logam',
      jumlah: 3600,
    },
    {
      name: 'Peralatan Olahraga',
      jumlah: 3000,
    },
    {
      name: 'Kerajinan',
      jumlah: 2000,
    },
    {
      name: 'Makanan',
      jumlah: 2780,
    },
    {
      name: 'Fashion',
      jumlah: 1890,
    },
];

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
                        if (sub !== "KOSONG" && sub.is_active == 1) {
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
                                                Pencarian data Berdasarkan Jenis Usaha
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
                                            Grafik Jumlah UKM/IKM Berdasarkan Jenis Usaha
                                        </Heading>
                                    </div>
                                </div>

                                <div style={{ width: '100%', height: 300 }}>
                                    <ResponsiveContainer>
                                        <BarChart
                                            width={500}
                                            height={350}
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            {/* <Legend /> */}
                                            {/* <Bar dataKey="jumlah" fill="#546de5" /> */}
                                            <Bar dataKey="jumlah" fill="#303952" label={{ position: 'top', }}>
                                                {data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                                ))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
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