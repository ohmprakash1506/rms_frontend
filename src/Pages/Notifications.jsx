import React, { useEffect } from 'react'
import { signOut } from "../Redux/Action/user";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Notifications() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!sessionStorage.getItem("userToken")) {
            dispatch(signOut(navigate))
        }
    })
    return (
        <main>
            <h1>Notifications</h1>
        </main>
    )
}
