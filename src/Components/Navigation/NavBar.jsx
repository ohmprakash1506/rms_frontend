import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
// import history from '../../History/history.js';
import "../../Styles/navigation.css"

import logo from "../../Assets/NavBarIcons/RSM.svg";
import dashboardIcon from "../../Assets/NavBarIcons/dashboard.svg";
import dashboardIconActive from "../../Assets/NavBarIcons/dashboardPurple.svg"
import cluster from "../../Assets/NavBarIcons/cluster.svg";
import clusterActive from "../../Assets/NavBarIcons/clusterWhite.svg";
import project from "../../Assets/NavBarIcons/project.svg";
import projectActive from "../../Assets/NavBarIcons/projectActive.svg"
import resource from "../../Assets/NavBarIcons/resource.svg";
import resourceActive from "../../Assets/NavBarIcons/resourceActive.svg";
import setting from "../../Assets/NavBarIcons/settings.svg";
import logout from "../../Assets/NavBarIcons/logout.svg";

function NavBar() {
    const [activePage, changeActivePage] = useState('Dashboard')

    const location = useLocation();
    const navigate = useNavigate();
    function handleNavigation(e) {
        const path = e.target.getAttribute('path');

        if (path) {
            changeActivePage(path)
            navigate(`/${path}`)
        }
    }

    useEffect(() => {
        changeActivePage((location.pathname).replace('/', ''))
    }, [])


    return (
        <div className="nav-routes">
            <nav className={`d-xl-flex flex-column m-0 nav-desktop`} >
                <h2 className="text-center fs-3 fw-bold"><img src={logo} alt="" className="" /> <span className="d-xl-none closeBtn" onClick={() => {
                    const navBar = document.getElementsByTagName('nav')
                    navBar[0].style.display = "none";
                }}>X</span></h2>

                <ul className="list-group mt-5"
                    onClick={(e) => handleNavigation(e)}>

                    <li path="dashboard" className={`py-3 px-4 mx-3 my-2 ${activePage === "dashboard" ? 'linkActive' : ''}`}>
                        <img path="dashboard" src={activePage === "dashboard" ? dashboardIconActive : dashboardIcon} alt="" className="dashboardIcon me-4" />
                        Dashboard
                    </li>


                    <li path="clusters" className={`py-3 px-4 mx-3 my-2 ${activePage === "clusters" ? 'linkActive' : ''}`}>
                        <img path="clusters" src={activePage === "clusters" ? clusterActive : cluster} alt="" className="dashboardIcon me-4" />
                        Clusters
                    </li>

                    <li path="resources" className={`py-3 px-4 mx-3 my-2 ${activePage === "resources" ? 'linkActive' : ''}`}>
                        <img path="resources" src={activePage === "resources" ? resourceActive : resource} alt="" className="dashboardIcon me-4" />
                        Resources
                    </li>

                    <li path='projects' className={`py-3 px-4 mx-3 my-2 ${activePage === "projects" ? 'linkActive' : ''}`}>
                        <img path='projects' src={activePage === "projects" ? projectActive : project} alt=""
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
        </div>

    );
}


export default NavBar;
