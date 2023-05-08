import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RenderComputers from './computers/renderComputers.computers'
import Navbar from './navbar/Navbar'
import SideNav from './sidenav/SideNav'

function Main() {
    console.log(process.env.REACT_APP_BASE_URL)
  return (
    <>
      <SideNav />
      <Navbar />
      {/* <RenderComputers /> */}
    </>
  )
}

export default Main