import React, { useEffect, useState } from 'react'
import "../Styles/emailVerification.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyLink, signOut } from "../Redux/Action/user"

function EmailVerification() {
    const [pageState, updatePageState] = useState(null)

    if (!pageState)
        return (
            < Loading updatePageState={updatePageState} />
        )
    if (pageState) {
        return (
            <Success />)
    }
}

export default EmailVerification;

function Success() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [time, updateTime] = useState(10)
   
    let t = setInterval(() => {
        let newTime = time - 1;
        updateTime(newTime)
    }, 1000)

    setTimeout(() => {
        clearInterval(t)
        dispatch(signOut(navigate))
    }, 5500*2)

    return (
        <div className="mt-5">
            <div className='bg-success rounded-circle d-block mx-auto'
                style={{ width: "100px", height: "100px" }}>
                <i className="bi bi-arrow-up-right"></i></div>
            <p className="fs-2 fw-bold text-center py-2">
                Your Email is verified now you will be redirected to Login page in <span>{time}</span> sec
            </p>
        </div>
    )
}

function Failure() {
    return (
        <div className="mt-5">
            <div className='bg-danger rounded-circle d-block mx-auto'
                style={{ width: "100px", height: "100px" }}>
                <i className="bi bi-arrow-up-right"></i></div>
            <p className="fs-2 fw-bold text-center py-2">Email verification failed!!!</p>
        </div>
    )
}

function Loading(props) {
    const dispatch = useDispatch();

    const url = window.location.href//code should be checked in production.
    const paramStart = url.indexOf("=");
    const token = url.slice(paramStart + 1, url.length)


    useEffect(() => {
        const nav = document.getElementsByClassName("nav-desktop")[0]
        const allRoutes = document.getElementsByClassName("nav-routes")[0]
        nav.style.setProperty("display", "none", "important")
        allRoutes.style.height = "100vh";

        if (token)
            dispatch(verifyLink(token, props.updatePageState))
    }, [])

    return (
        <section className='emailVerification'>
            <h2 className="text-center my-3">Email verification in Process</h2>
            <div className="d-flex justify-content-center" >
                <div className="spinner-border" role="status" style={{ width: "150px", height: "150px" }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </section>
    )
}