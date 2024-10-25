import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { Switch } from 'react-router';
//import {push} from "react-"

import Dashboard from "../Pages/Dashboard"
import Resources from "../Pages/Resources"
import Projects from "../Pages/Projects"
import Notifications from "../Pages/Notifications"
import Signin from "../Pages/Signin"
import decodeData from "../Utils/userAuthentication.js"
import Cluster from "../Pages/Cluster"
import "../Styles/navigation.css"
import EmailVerification from "../Pages/EmailVerification";

import logo from "../Assets/NavBarIcons/RMS.svg";
import dashboardIcon from "../Assets/NavBarIcons/dashboard.svg";
import dashboardIconActive from "../Assets/NavBarIcons/dashboardPurple.svg"
import cluster from "../Assets/NavBarIcons/cluster.svg";
import clusterActive from "../Assets/NavBarIcons/clusterWhite.svg";
import project from "../Assets/NavBarIcons/project.svg";
import projectActive from "../Assets/NavBarIcons/projectActive.svg"
import resource from "../Assets/NavBarIcons/resource.svg";
import resourceActive from "../Assets/NavBarIcons/resourceActive.svg";
import setting from "../Assets/NavBarIcons/settings.svg";
import logout from "../Assets/NavBarIcons/logout.svg";

function NavBar() {

    const [userAuth, handleUserAuth] = useState(false);
    const [activePage, changeActivePage] = useState('Dashboard')

    // window.localStorage.setItem('page', activePage)
    decodeData(handleUserAuth)

    // function activePage() {
    //     const page = window.location.href;
    //     const presentPage = page.slice(22, page.length);//code needs to be changed in production use env

    //     const links = Array.from(document.getElementById('mainNavBar').children)

    //     for (let l of links) {
    //         l.classList.remove('linkActive')
    //         let p = (l.textContent).toLocaleLowerCase().replace(' ', '')
    //         if (presentPage === p) {
    //             l.classList.add('linkActive')
    //             /*if (p === "dashboard") {
    //                 l.getElementsByTagName('img')[0].src = dashboardIconActive;
    //             }
    //             if (p === "clusters") {
    //                 l.getElementsByTagName('img')[0].src = clusterActive;
    //             }
    //             if (p === "projects") {
    //                 l.getElementsByTagName('img')[0].src = projectActive;
    //             }
    //             if (p === "resources") {
    //                 l.getElementsByTagName('img')[0].src = resourceActive;
    //             }*/
    //         }


    //     }
    // }

    useEffect(() => {
        // activePage()
        //console.log(localStorage.getItem('page'))
        //changeActivePage(localStorage.getItem('page'))
    }, [])


    return (

        <BrowserRouter>

            <div className="nav-routes">
                <nav className={`d-xl-flex flex-column m-0 position-xl-sticky nav-desktop`} >
                    <h2 className="text-center fs-3 fw-bold"><img src={logo} alt="" className="" /> <span className="d-xl-none closeBtn" onClick={() => {
                        const navBar = document.getElementsByTagName('nav')
                        navBar[0].style.display = "none";
                    }}>X</span></h2>

                    <ul className="list-group mt-5"

                        onClick={(e) => {
                            // debugger;
                            const path = e.target.getAttribute('path');
                            changeActivePage(path)
                            console.log(path)
                            // window.location.href = `/${path}`;
                            //BrowserRouter.path = `/${path}`;
                            // return (
                            //     <Link to={`/${page}`}></Link>
                            // )

                        }}

                        /*onClick={(e) => {
                            if (!e.target.href)
                                return;
                            let pageLink = e.target.parentElement;
                            const activeBar = document.getElementsByClassName('linkActive')[0]
                            if (activeBar)
                                activeBar.classList.remove('linkActive')
                            pageLink.classList.add('linkActive')

                            let l = pageLink.getElementsByTagName('img')[0]
                            let p = (pageLink.textContent).toLocaleLowerCase().replace(' ', '');

                            if (p === "dashboard") {
                                l.src = dashboardIconActive;
                            }
                            if (p === "clusters") {
                                l.src = clusterActive;
                            }
                            if (p === "projects") {
                                l.src = projectActive;
                            }
                            if (p === "resources") {
                                l.src = resourceActive;
                            }
//<Link to="/clusters">Clusters</Link></li>

                             onClick={() => changeActivePage('Dashboard')}
                        }}*/
                        id="mainNavBar">

                        <li path="dashboard" className={`py-3 px-4 mx-3 my-2 ${activePage === "dashboard" ? 'linkActive' : ''}`}>
                            <img
                                src={activePage === "dashboard" ? dashboardIconActive : dashboardIcon}
                                alt=""
                                className="dashboardIcon me-4"
                            />
                        </li>


                        <li path="clusters" className={`py-3 px-4 mx-3 my-2 ${activePage === "clusters" ? 'linkActive' : ''}`}>
                            <img src={activePage === "clusters" ? clusterActive : cluster} alt="" className="dashboardIcon me-4" />
                            Clusters
                        </li>

                        <li path="resources" className={`py-3 px-4 mx-3 my-2 ${activePage === "resources" ? 'linkActive' : ''}`}>
                            <img src={activePage === "resources" ? resourceActive : resource} alt="" className="dashboardIcon me-4" />
                            Resources
                        </li>

                        <li path='projects' className={`py-3 px-4 mx-3 my-2 ${activePage === "projects" ? 'linkActive' : ''}`}>
                            <img src={activePage === "projects" ? projectActive : project} alt=""
                                className="dashboardIcon me-4" />
                            Projects
                        </li>

                    </ul>

                    <ul className="nav-bottom-link">
                        <li className="py-3 my-2"><img src={setting} alt="" className="dashboardIcon me-4" />Settings</li>
                        <li className="py-3 my-2" onClick={() => {
                            sessionStorage.clear()
                        }
                        }><img src={logout} alt="" className="dashboardIcon me-4" />
                            <Link to="/">Logout</Link></li>
                    </ul>
                </nav>


                <div className="allRoutes mx-5 mt-4">

                    <Routes>
                        {/*<Route exact path="/dashboard" element={<Dashboard />}></Route>
                        <Route exact path="/resources" element={userAuth ? <Resources /> : <Signin />}></Route>
                        <Route exact path="/clusters" element={userAuth ? <Cluster /> : <Signin />}></Route>
                        <Route exact path="/" element={userAuth ? <Signin /> : <Signin />}></Route>
                        <Route exact path="/projects" element={userAuth ? <Projects /> : <Signin />}></Route>

                    <Route exact path="/notifications" element={<Notifications />}></Route>*/}

                        <Route exact path="/dashboard" element={<Dashboard />} ></Route>
                        <Route exact path="/resources" element={<Resources />}></Route>
                        <Route exact path="/clusters" element={<Cluster />}></Route>
                        <Route exact path="/" element={<Signin />}></Route>
                        <Route exact path="/projects" element={<Projects />}></Route>

                        <Route exact path="/notifications" element={<Notifications />}></Route>
                        <Route path="/verifyEmail" element={<EmailVerification />}></Route>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>

    );
}


export default NavBar;
