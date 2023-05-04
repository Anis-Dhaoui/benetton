import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RenderComputers from './computers/renderComputers.computers'
import SidebarMenu from './sidebar/sidebarMenu'

function Main() {
    console.log(process.env.REACT_APP_BASE_URL)
  return (
    <>
      <SidebarMenu />
      {/* <RenderComputers /> */}
    </>
  )
}

export default Main