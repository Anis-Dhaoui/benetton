import React, { useEffect, useState } from 'react'
import './Plugins.js';
import './style.css'
import { darkMode, navbarFixed } from './Plugins.js';

function Navbar() {

    // $$$$$$$$$$$$$$$$$$$$$$$$$ WHEN DARK MODE BUTTON CLICKED $$$$$$$$$$$$$$$$$$$$$$$$$
    const [isDarkMode, setisDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkModeStatus')!) || false);

    useEffect(() => {
        localStorage.setItem('darkModeStatus', JSON.stringify(isDarkMode));
        darkMode(isDarkMode);
    }, [isDarkMode]);

    const handleDarkMode = (el: any) => {
        setisDarkMode(!isDarkMode);  
    }
    // $$$$$$$$$$$$$$$$$$$$$$$$$ WHEN DARK MODE BUTTON CLICKED $$$$$$$$$$$$$$$$$$$$$$$$$

    return (
        <main className="main-content">
            <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
                <div className="container-fluid py-1 px-3">
                    <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                        <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                            {/* <div className="input-group input-group-outline">
                                <input type="text" className="form-control" placeholder='Chercher...' />
                            </div> */}
                        </div>
                        <ul className="navbar-nav  justify-content-end">
                            <li className="nav-item d-flex align-items-center">
                                <a href="./pages/sign-in.html" className="nav-link top-right-nav-btn font-weight-bold px-0">
                                    <i className="fa fa-user me-sm-1"></i>
                                    <span className="d-sm-inline d-none">Sign In</span>
                                </a>
                            </li>
                            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                                <a href="#!" className="nav-link p-0 top-right-nav-btn" id="iconNavbarSidenav">
                                    <div className="sidenav-toggler-inner">
                                        <i className="sidenav-toggler-line"></i>
                                        <i className="sidenav-toggler-line"></i>
                                        <i className="sidenav-toggler-line"></i>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item px-3 d-flex align-items-center">
                                <a href="#" className="nav-link p-0 top-right-nav-btn">
                                    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                                </a>
                            </li>

                            {/* NOTIFICATION DROPDOWN MENU */}
                            <li className="nav-item dropdown pe-2 d-flex align-items-center">
                                <a href="#" className="nav-link p-0 top-right-nav-btn" id="dropdownMenuButton" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="fa fa-bell cursor-pointer"></i>
                                </a>

                                <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                                    <li className="mb-2">
                                        <a className="dropdown-item border-radius-md" href="#!">
                                            <div className="d-flex py-1">
                                                <div className="my-auto">
                                                    <img src={require("../../assets/images/notif-1.jpg")} className="avatar avatar-sm  me-3 " />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="text-sm font-weight-normal mb-1">
                                                        <span className="font-weight-bold">New message</span> from Laur
                                                    </h6>
                                                    <p className="text-xs text-secondary mb-0">
                                                        <i className="fa fa-clock me-1"></i>
                                                        13 minutes ago
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="dropdown-item border-radius-md" href="#!">
                                            <div className="d-flex py-1">
                                                <div className="my-auto">
                                                    <img src={require("../../assets/images/notif-2.jpg")} className="avatar avatar-sm bg-gradient-dark  me-3 " />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h6 className="text-sm font-weight-normal mb-1">
                                                        <span className="font-weight-bold">New message</span> by Travis Scott
                                                    </h6>
                                                    <p className="text-xs text-secondary mb-0">
                                                        <i className="fa fa-clock me-1"></i>
                                                        1 day
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>








            {/* CONFIGURATION RIGHT SIDE MENU */}
            <div className="fixed-plugin">
                <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
                    <i className="material-icons py-2">settings</i>
                </a>
                <div className="card shadow-lg">
                    <div className="card-header pb-0 pt-3">
                        <div className="float-start">
                            <h5 className="mt-3 mb-0">CONFIGURATIONS</h5>
                        </div>
                        <div className="float-end mt-4">
                            <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                                <i className="material-icons">clear</i>
                            </button>
                        </div>
                        {/* <!-- End Toggle Button --> */}
                    </div>

                    <hr className="horizontal dark my-1" />

                    <div className="card-body pt-sm-3 pt-0">
                        <p className="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>

                        {/* <hr className="horizontal dark my-3" /> */}
                        <div className="mt-2 d-flex">
                            <h6 className="mb-0">Light / Dark</h6>
                            <div className="form-check form-switch ps-0 ms-auto my-auto">
                                <input className="form-check-input mt-1 ms-auto" type="checkbox" id="dark-version" onChange={(el) => handleDarkMode(el)} checked={isDarkMode}/>
                            </div>
                        </div>
                        <hr className="horizontal dark my-sm-4" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Navbar;