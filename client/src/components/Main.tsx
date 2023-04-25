import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RenderComputers from './computers/renderComputers.computers'

function Main() {
    console.log(process.env.REACT_APP_BASE_URL)
  return (
    <>
      <RenderComputers />
    </>
  )
}

export default Main