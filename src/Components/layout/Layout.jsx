import React from 'react'
import '../../App.css'
import '../../index.css'
import { Outlet } from 'react-router-dom';
import Navbar from '../1_header/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Games from '../3_games/Games';
import Footer from '../footer/Footer';

function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
