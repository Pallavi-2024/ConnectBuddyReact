
import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import Layout from "./components/Layout";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
   <Layout>
      <h2>Dashboard Content</h2>
    </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)