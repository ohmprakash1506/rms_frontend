import React from 'react'
import "../Styles/dashboardBottomorders.css"

function DashboardOrdersList(props) {
    return (
        <>
            <div className='my-4 p-relative'>
                <div className='p-absolute sideLineBottom'></div>
                <p className='m-0 fw-bold'>{props.order.title}</p>
                <p className='fw-bold' style={{ color: "grey" }}>{props.order.date}</p>
            </div>
        </>
    )
}

export default DashboardOrdersList