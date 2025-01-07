import React from 'react'
import '../../App.css'
import '../../index.css'
import { Outlet } from 'react-router-dom';
import Navbar from '../1_header/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default Layout
