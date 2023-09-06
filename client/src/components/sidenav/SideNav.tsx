import React from 'react'
import '../../assets/css/material-dashboard.css';

export default function SideNav() {
  return (
    <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
    <div className="sidenav-header">
      <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a className="navbar-brand m-0" href="/">
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAJFBMVEVMaXEAmUYAmUYAmUYAmUYAmUYAmUYAmUYAmUYAmUYAmUYAmUbxgxxeAAAADHRSTlMAL2WgtxmE5P9J9dLvxwmjAAAA8UlEQVR4Aa1QJVsDUBQ904pbwiHi1nAruLtbwh9xfr6HS4KITSr+59j23jzvtmvHkL7KbuwqTewnBenZiPeWfk99uXAOxwYm1gE5rI0NHsNLS78vNtj2qbEjNug/BoA5Z3zwqQbnw8kXU/GLbbvCcMdZzlNYTOwAcmM6Voct/eclxh/nsKVKDVoHMOZ9GZRNeNCw27IN1eQBcrxa2uiPbNsi3+7FeWXUvOThFr2xACzbZNMY6Y4qffAGvOc/8k8O6D7He175RJ6FsDo07XmlZhn90SwtGzCIrz1PJiaP1OAWsHpuDGIZKIIuGJuBtRKkq4IKHEfwsaigsQAAAABJRU5ErkJggg==' className="navbar-brand-img h-100" alt="main_logo" />
        <span className="ms-1 font-weight-bold text-white">United Colors of Benetton</span>
      </a>
    </div>
    <hr className="horizontal light mt-0 mb-2" />
    <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-white active bg-gradient-primary" href="../pages/dashboard.html">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">dashboard</i>
            </div>
            <span className="nav-link-text ms-1">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="../pages/tables.html">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">table_view</i>
            </div>
            <span className="nav-link-text ms-1">Menu Link 1</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="../pages/billing.html">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">receipt_long</i>
            </div>
            <span className="nav-link-text ms-1">Menu Link 2</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="../pages/virtual-reality.html">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">view_in_ar</i>
            </div>
            <span className="nav-link-text ms-1">Menu Link 3</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="../pages/notifications.html">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">notifications</i>
            </div>
            <span className="nav-link-text ms-1">Notifications</span>
          </a>
        </li>
        <li className="nav-item mt-3">
          <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Administrateur</h6>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="../pages/profile.html">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">person</i>
            </div>
            <span className="nav-link-text ms-1">Profile</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="../pages/sign-in.html">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">manage_accounts</i>
            </div>
            <span className="nav-link-text ms-1">Gestion des utilisateurs</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
  )
}
