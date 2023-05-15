import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import RenderComputers from './computers/renderComputers.computers'
import Navbar from './navbar/Navbar'
import SideNav from './sidenav/SideNav'

function Main() {
  console.log(process.env.REACT_APP_BASE_URL)
  return (
    <div className='row'>
      <div className='col-md-2 col-sm-3'>
        <SideNav />
      </div>
      <div className='col-md-10 col-sm-9'>
        <div className='row'>
          <div className='col-md-12'>
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main