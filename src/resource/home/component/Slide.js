import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../../../assets/css/slide.css';
import Banner1 from '../../../assets/img/Banner/bannersl.jpg';
import Banner2 from '../../../assets/img/Banner/bannersl2.jpg';
import Banner3 from '../../../assets/img/Banner/bannersl4.jpg';

function Slide() {

  return (
    <div className='container pt-3'>
        <div className='row'>
            <div className='col-md-12'>

                <Splide aria-label="Branding Image" options={{ type : 'loop', autoplay: 'play' }}>
                    <SplideSlide>
                        <Image src={Banner1} className="img-fluid" alt="Image-Slide"/>
                    </SplideSlide>
                    <SplideSlide>
                        <Image src={Banner2} className="img-fluid" alt="Image-Slide"/>
                    </SplideSlide>
                    <SplideSlide>
                        <Image src={Banner3} className="img-fluid" alt="Image-Slide"/>
                    </SplideSlide>
                </Splide>
                
            </div>
        </div>
    </div>
  );
}

export default Slide;