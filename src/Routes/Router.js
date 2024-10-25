import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard"
import Resources from "../Pages/Resources"
import Projects from "../Pages/Projects"
import Signin from "../Pages/Signin"
import Layout from "../Layout/Layout.js";
import Cluster from "../Pages/Cluster";
import history from '../History/history';
import NotFound from '../Pages/NotFound';


function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signin />} ></Route>
                <Route path="/dashboard" element={<Layout children={<Dashboard />} name={"Dashboard"} />} ></Route>
                <Route path="/clusters" element={<Layout children={<Cluster />} name={"Clusters"} />} ></Route>
                <Route path="/resources" element={<Layout children={<Resources />} name={"Resources"} />} ></Route>
                <Route path="/projects" element={<Layout children={<Projects />} name={"Projects"} />} ></Route>
                <Route path="*" element={<NotFound />} ></Route>
            </Routes>
        </Router>
    )
}

export default Routers;