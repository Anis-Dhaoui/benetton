import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import SideNav from './sidenav/SideNav'
import TableComputer from './computers/computers-table/Table.computers'
import RenderComputers from './computers/renderComputers.computers'

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

          <div className='col-md-12 mt-5' style={{marginLeft: '-33px'}}>
            <RenderComputers />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main