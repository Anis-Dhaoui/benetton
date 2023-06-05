import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import SideNav from './sidenav/SideNav'
import RenderComputers from './computers/renderComputers.computers'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Main() {
  console.log(process.env.REACT_APP_BASE_URL)
  return (
    <div className='row'>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <ToastContainer />

      <div className='col-md-2 col-sm-3'>
        <SideNav />
      </div>
      <div className='col-md-10 col-sm-9'>
        <div className='row'>

          <div className='col-md-12'>
            <Navbar />
          </div>

          <div className='col-md-12 mt-5' style={{ marginLeft: '-33px' }}>
            <RenderComputers />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main