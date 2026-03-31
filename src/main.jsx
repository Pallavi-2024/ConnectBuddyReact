
import ReactDOM from 'react-dom/client'
import React from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'https://localhost:7022/api/';
// axios.defaults.baseURL = 'http://uniqtech-001-site37.ntempurl.com/api/';
import './index.css'
import Layout from "./components/Layout";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)