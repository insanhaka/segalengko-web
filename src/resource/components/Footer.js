import React from 'react';

function Footer() {

  return (
    <footer className="content-footer footer mt-5">
        <div className="container-xxl d-flex flex-wrap justify-content-center py-2 flex-md-row flex-column">
            <div>
                <p style={{ fontSize: 12 }}> © {new Date().getFullYear()} - SegaLengko || Smartcity And Public Services Platform 
                <br/>
                Powered by Dinas Kominfo Kab. Tegal || made with <i className='bx bxs-heart bx-burst'></i>  by <b>IHK</b></p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;