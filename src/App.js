import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";

// Auth Page
import Login from './resource/auth/Login';
// Content Pages
import Home from './resource/home/Layout';
import PDIndex from './resource/portal-data/Layout';
import IKIndex from './resource/info-kota/Layout';

export default function App() {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>

            <Route path="/" element={<Home/>} />

            <Route path="/login" element={<Login/>} />

            <Route path="/portal-data/:menu" element={<PDIndex/>}/>

            <Route path="/info-kota/:menu" element={<IKIndex/>}/>

          </Routes>
        </div>
      </Router>
    </Provider>
  );
}