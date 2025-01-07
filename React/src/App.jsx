import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Outlet, createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import Games from './Components/2_games/Games';
import Layout from './Components/layout/Layout';
let routs = createBrowserRouter([
  {path:'', element : <Layout/>, children:[
    {index:true, element : <Games/>},
  ]}
])
function App() {
  return (
    <RouterProvider router={routs}>
      <Outlet/>
    </RouterProvider>
  );
}

export default App
