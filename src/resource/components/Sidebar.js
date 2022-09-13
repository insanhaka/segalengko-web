import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../../assets/css/aside.css';
import '../../assets/css/menyala.css';

function Sidebar() {

  return (
    <aside id="layout-menu" className="layout-menu menu-vertical fixed menu bg-menu-theme">
        <div className="app-brand demo mb-3">
            <a href="/" className="app-brand-link">
                <span className="demo menu-text ms-3" style={{ fontSize: 28, fontWeight: 'bold' }}>SegaLengko</span>
            </a>
        </div>
        <ul className="menu-inner py-1">
            <li className="menu-item p-1 active menyala">
                <a href="/" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-desktop"></i>
                    <div data-i18n="Analytics">Dashboard</div>
                </a>
            </li>
            
            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Smart City Dimension</span>
            </li>
            <Accordion className="menu-item p-1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={{ paddingLeft: 18 }}>
                        <i className="menu-icon tf-icons bx bx-building-house"></i>
                        <div data-i18n="Analytics">Smart Governance</div>
                    </Accordion.Header>
                    <Accordion.Body style={{ paddingTop: 10 }}>
                        <a href="#" className="menu-link mb-1">
                            <i className="menu-icon tf-icons bx bx-id-card"></i>
                            <div data-i18n="Analytics">Kepegawaian</div>
                        </a>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion className="menu-item p-1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={{ paddingLeft: 18 }}>
                        <i className="menu-icon tf-icons bx bx-line-chart"></i>
                        <div data-i18n="Analytics">Smart Economy</div>
                    </Accordion.Header>
                    <Accordion.Body style={{ paddingTop: 10 }}>
                        <a href="#" className="menu-link mb-1">
                            <i className="menu-icon tf-icons bx bx-store"></i>
                            <div data-i18n="Analytics">UKM / IKM</div>
                        </a>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion className="menu-item p-1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={{ paddingLeft: 18 }}>
                        <i className="menu-icon tf-icons bx bx-walk"></i>
                        <div data-i18n="Analytics">Smart Living</div>
                    </Accordion.Header>
                    <Accordion.Body style={{ paddingTop: 10 }}>
                        <a href="#" className="menu-link mb-1">
                            <i className="menu-icon tf-icons bx bx-clinic"></i>
                            <div data-i18n="Analytics">Kesehatan</div>
                        </a>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </ul>
    </aside>
  );
}

export default Sidebar;