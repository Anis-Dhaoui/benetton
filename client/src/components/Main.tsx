import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import SideNav from './sidenav/SideNav'
import RenderComputers from './computers/renderComputers.computers'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LoginPage from './login-page/login.login-page'
import { useAppSelector } from '../state/store.state'
import Profile from './profile/profile.profile'
import RouteProtector from './RouteProtector'
import UsersManagement from './user-Management/users.user-management'


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

        {
          window.location.pathname !== '/login' && isAuthenticated ?
            <>
              <div className='col-md-12'>
                <Navbar />
              </div>
              <div className='col-2' id='sideNav'>
                <SideNav />
              </div>
            </>
            : null
        }

        <div className='col-lg-10 col-md-12 col-sm-10' id="computers-wrapper">
          <div className='row'>
            <div className='col-md-12'>
              <Routes>
                <Route path='/login' element={<LoginPage />} />

                <Route path='/home'
                  element={
                    <RouteProtector isLoggedIn={isAuthenticated}>
                      <RenderComputers />
                    </RouteProtector>
                  }
                />

                <Route path='/profile'
                  element={
                    <RouteProtector isLoggedIn={isAuthenticated}>
                      <Profile />
                    </RouteProtector>
                  }
                />

                <Route path='/users_management'
                  element={
                    <RouteProtector isLoggedIn={isAuthenticated}>
                      <UsersManagement />
                    </RouteProtector>
                  }
                />

                <Route path='*' element={<div>NOT FOUND</div>} />
                <Route path='/' element={<Navigate to="/home" />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Main