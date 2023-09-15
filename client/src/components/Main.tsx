import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import SideNav from './sidenav/SideNav'
import RenderComputers from './computers/renderComputers.computers'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LoginPage from './login-page/login.login-page'
import { useAppSelector } from '../state/store.state'


function Main() {
  const navigate = useNavigate();

  const { loading, user, errMsg, isAuthenticated } = useAppSelector(state => state.login);
  //Redirect to home Page when logged user trying to access entry page
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
    /* eslint-disable-next-line */
  }, [isAuthenticated])

  return (
    <div className='container-fluid'>
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

        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/home' element={
            <>
              <div className='col-md-2 col-sm-3'>
                <SideNav />
              </div>
              <div className='col-md-10 col-sm-9'>
                <div className='row'>

                  <div className='col-md-12'>
                    <Navbar />
                  </div>

                  <div className='col-md-12'>
                    <RenderComputers />
                  </div>

                </div>
              </div>
            </>
          }
          />

          <Route path="/" element={<Navigate to="/home" />} />

          <Route path='*' element={<div>NOT FOUND</div>} />
        </Routes>

      </div>
    </div>

  )
}

export default Main